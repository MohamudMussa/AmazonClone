import React from 'react'
import '../style/Product.css'

const Product = ({ id, title, image, price, rating, amount }) => {
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

            <button>Add to Basket </button>

        </div>
    )
}

export default Product
