import React from 'react'
import '../style/Product.css'
import { useStateValue } from '../data/StateProvider'

const Product = ({ id, title, image, price, rating, amount }) => {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {

        // add item to basket 

        //remember dispatch is like a gun, its going to fire an object
        //the reducer checks the action type
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                tite: title,
                image: image,
                price: price,
                rating, rating,
                amount, amount
            }
        })

    };

    return (
        <div className="product" id={id}>
            <div className="product__info">
                <p> {title} </p>

                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                    <p style={{ fontSize: '11px', paddingTop: '5px' }}>{amount}</p>
                </div>

            </div>

            <img src={image} alt='productImage' />

            <button onClick={addToBasket}>Add to Basket </button>

        </div>
    )
}

export default Product
