import React from "react"

export default function CardVideogame({image,id,name,price,rating}){
    return(
<div>
            {/* <Link to={`/home/games/${id}`} className='Link'> */}
               
                    <div>
                    <img src={image} alt="cardvideogame"></img>
                    <span>{name}</span>
                    <span>{price}</span>
                    <span> {rating} </span>
                </div>
            {/* </Link> */}
        </div> 
    )
}