const { Newsletter, Games } = require("../db")
const { transporter } = require("../config/mailer")


const getMailsNewsLetter = async (req, res) => {
    try {
        let allMails = await Newsletter.findAll()
        res.send(allMails)
    }
    catch (err) {
        console.log(err)
    }
   
}

const sendNewsletter = async (req, res) => {
    let {mail} = req.body
    const htmlEmail = `
    <!DOCTYPE html>
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
                <h1>Thanks 🎮</h1>
                <h3>Thanks For Subscriber In Games Store 👻</h3>
            </div>
        </body>
    </html>
    `
    try{    
        let news = await Newsletter.findOrCreate({
            where: {
                mail: mail
            },
            defaults: {
                mail: mail
            }
        })
        await transporter.sendMail({
            from: '"Thanks For Subscriber To Newsletter 🎮" <henry.games.store@gmail.com>',
            to: mail,
            subject: "Welcome to newsletters of Games Store 📰🧐",
            html: htmlEmail
        })
        res.send(news)
    } catch(err) {
        console.log(err)
    }
}



module.exports={
    getMailsNewsLetter,
    sendNewsletter
}