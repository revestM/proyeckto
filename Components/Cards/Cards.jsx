import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, deleteItemFromFavs, addToCart, deleteItemFromCart } from "../../redux/Actions/Index.js";
import PrettyRating from "pretty-rating-react";
import { useEffect } from "react";
import './Cards.css';
import CardHover from "../NewCard/CardHover.jsx";
import {
    faStar,
    faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
    faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";
import swal from 'sweetalert';

export default function Card({ card }) {

    let { name, image, price, rating, id } = card
    const dispatch = useDispatch()
    const [render, setRender] = useState('')
    const favoritos = useSelector(state => state.favorites)
    const items = useSelector(state => state.cart)

    const favorites = JSON.parse(localStorage.getItem("favProducts"));

    function handleFavourite(e) {

        let foundItem = favoritos.find(item => item.id === id)

        if (foundItem) {
            dispatch(deleteItemFromFavs(id))
            swal({
                title: `${name} deleted from favorites!`
            })
            setRender(`${rating}`)
        }
        else {
            let item = {
                id: id,
                name: name,
                price: price,
                image: image,
                rating: rating,
            }
            dispatch(addToFav(item))
            swal({
                title: `${name} added to your favorites!`
            })
            setRender(`${name}`)
        }


        // let item = {
        //     id: id,
        //     name: name,
        //     price: price,
        //     image: image,
        //     rating: rating,
        // }
        // if (e.target.checked) {
        //     dispatch(addToFav(item))
        //     swal({
        //         title: `${name} added to your favorites!`,
        //         // background: 'black' 
        //     })
        //     setRender(render, 'hola')
        // } else {
        //     dispatch(deleteItemFromFavs(item.id))
        //     swal({
        //         title: `${name} remove from your favorites!`,
        //     })
        //     setRender(render, 'hola')
        // }
    }

    function addGameToCart() {

        const cartItems = JSON.parse(localStorage.getItem("products"));
        let foundItem = cartItems.find(item => item.id === id)

        if (foundItem) {
            dispatch(deleteItemFromCart(id))
            swal({
                title: `${name} deleted from cart!`
            })
        }
        else {

            let item = {
                id: id,
                name: name,
                price: price,
                image: image,
                rating: rating,
            }
            dispatch(addToCart(item))
            swal({
                title: `${name} added to cart!`
            })
        }
    }

    const icons = {
        star: {
            complete: faStar,
            half: faStarHalfAlt,
            empty: farStar,
        }
    }
    const colors = {
        star: ['#d9ad26', '#d9ad26', '#434b4d'],
    }

    useEffect(() => {
        localStorage.setItem("favProducts", JSON.stringify(favoritos));
        localStorage.setItem("products", JSON.stringify(items));
    }, [favoritos, items]);

    return (
        <div>
            <div className="fav-game-list">
                <Link to={`/home/games/${id}`} className='Link'>
                    <CardHover image={image} name={name}>
                    </CardHover>
                </Link>
                {
                    favorites?.find(item => item.id === id) ?
                        <div className="card-favourite">
                            <input id={`hearth-${id}`} type="checkbox" value={name} onClick={(e) => handleFavourite(e)} checked={true} className="favourite-checkbox" />
                            <label className="favourite-label" htmlFor={`hearth-${id}`}>❤</label>
                            <button id="button_cart_card" onClick={() => addGameToCart()}>🛒</button>
                        </div>
                        :
                        <div className="card-favourite">
                            <input id={`hearth-${id}`} type="checkbox" value={name} onClick={(e) => handleFavourite(e)} className="favourite-checkbox" />
                            <label className="favourite-label" htmlFor={`hearth-${id}`}>❤</label>
                            <button id="button_cart_card" onClick={() => addGameToCart()}>🛒</button>
                        </div>
                }
            </div>
            <div className="card-data">
                <span className="h">{price} US$</span>
                <PrettyRating value={rating} icons={icons.star} colors={colors.star} />
            </div>


        </div>
    )
}