import React from 'react'
import { useStateValue } from '../data/StateProvider'


const CheckoutProduct = ({ id, title, image, price, rating, amount }) => {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {

        dispatch({

            type: 'REMOVE_FROM_BASKET',
            id: id,
        });



    }
    return (
        <div className='checkoutProduct'>

            <img className='checkout__image' src={image} alt="" />

            <div className='checkoutProduct__info'>

                <p className='checkoutProduct__title'> {title} </p>

                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                    <p style={{ fontSize: '11px', paddingTop: '5px' }}>{amount}</p>
                </div>

                <button onClick={removeFromBasket}>Remove from Basket </button>
            </div>

        </div >
    )
}

export default CheckoutProduct
