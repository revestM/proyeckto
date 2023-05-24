const {Users} = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { transporter } = require("../config/mailer")

function validateAttributes(name, lastName, userName, mail){
    if (!name || (typeof name !== "string") || (name.length < 0) ){
        return "The User Name must exist and must be a character string"
    } else if (!lastName || (typeof lastName !== "string") || (lastName.length < 0) ){
        return "The User Name must exist and must be a character string"
    } else if (!userName || (typeof userName !== "string") || (userName.length < 0) ){
        return "The User userName must exist and must be a character string"
    } else if (!mail || (typeof mail !== "string") || (mail.length < 0) ){
        return "The User mail must exist and must be a character string"
    } else {
        return true;
    }
}


const singUp = async (req, res) =>    {
    if(req.body.password !== undefined)  
        {
        try {

        let admins = ['lautaro0121@gmail.com', 'Lautaro0121@gmail.com', "jejog50@gmail.com","juandavid614@hotmail.com", "bermudez.luciana9@gmail.com","f.s.b.rojas@gmail.com", "phyrofyre@gmail.com"]
        let password = bcrypt.hashSync(req.body.password, 8);
        const { name, lastName, userName, mail, address, image} = req.body
        const htmlEmail = `<!DOCTYPE html>
        <html>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;900&family=Righteous&display=swap" rel="stylesheet">
                <style>
                    .img {
                        max-width: 100px;
                        border-radius: 25%;
                    }
    
                    h1, h2, h3, p {
                        text-align: center;
                        font-family: 'Lato', sans-serif;
                        font-family: 'Righteous', cursive;
                    }
                    .image {
                        background-color: rgb(31, 31, 31);
                        text-align: center;
                    }
    
                </style>
            </head>
            <body>
                <div>
                    <div class="image">
                        <a href="https://henry-project.vercel.app/home">
                            <img class="img" src="https://i.im.ge/2022/09/07/OZP87y.Icon.png" alt="iconImg"/>
                        </a>
                    </div>
                    <h1>User Information 📖</h1>
                    <h3>Thanks For Register In Games Store 👻</h3>
                    <h1>This is your information</h1>
                    <hr></hr>
                    <h3>Name: ${name}</h3>
                    <h3>Username: ${userName}</h3>
                    <h3>Address: ${address}</h3>
                </div>
            </body>
        </html>`
        
        const validation = validateAttributes(name, lastName, userName, mail, address);
        if (validation === true) {
    
          const [newUser, created] = await Users.findOrCreate({
            where: {
              mail
            },
            defaults: {
              name,
              lastName,
              userName,
              address,
              password,
              image,
              admin: admins.includes(mail) ? true : false
            },
          })
          let token = jwt.sign({ user: newUser }, 'aaa', {
            expiresIn: Math.floor(Date.now() / 1000) + (60 * 60)
        });


         if (!created ) res.status(201).send('There is already a user with that mail') 
         else {
          res.json({newUser,token})
         }
        
         await transporter.sendMail({
            from: '"Thanks For Register In Games Store 👻" <henry.games.store@gmail.com>', // sender address
            to: mail, // list of receivers
            subject: "Hello ✔", // Subject line
            html: htmlEmail, // html body
          });

        } else {
          return res.status(404).send(validation)
        }
      }
      catch (error) {
        res.status(500).json(error)
      }
    };
}

const singIn=async (req,res) => {
    let { mail, password} = req.body;
    try {
        const user = await Users.findOne({
            where: {mail : mail}
        }) 
        // console.log('usuario de base de datos', user.dataValues)
        if(!user){
            res.send(404).json({ msg: "Usuario con este correo no se encuentra" })
        }else{
            if(bcrypt.compareSync(password,user.password)){
                let token = jwt.sign({ user: user }, 'aaa', {
                    expiresIn: Math.floor(Date.now() / 1000) + (60 * 60)
                });
                res.json({user: user,token: token})
                // .redirect("http://localhost:3000/profile")
            }else{
                res.status(401).json({msg: "Contrasenia incorrecta"})
            }
        }
    } catch (error) {
        console.log('Error en inciar sesion',error)
    }
    


}
//singUp --> registrar
module.exports = {singUp,singIn}
// module.exports = {singIn}