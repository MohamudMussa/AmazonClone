import React from 'react'
import { useStateValue } from '../data/StateProvider'
import '../style/Checkout.css'
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <img className="checkout__ad" src='https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2021/img/Personal_Care_Appliances/XCM_Manual_1324765_1669673_UK_uk_eu5_wellness_in_the_spring_event_stripes_gb_en_3814441_1500x80_2X_en_GB.jpg' alt='ad' />



            {basket.length === 0 ? (
                <div>
                    <h2 className='checkout__title'>  Your Shopping Basket is empty  </h2>
                    <p> Please add an item to your basket. </p>
                </div>


            ) : (<div>
                <h2 className='checkout__title'> Your Shopping Basket </h2>

                {/* List out checkout products */}

                <CheckoutProduct
                    id={basket.id}
                    title={basket.title}
                    price={basket.price}
                    rating={basket.rating}
                    image={basket.image}
                    amount={basket.amount}
                />

            </div>)}
        </div>
    )
}

export default Checkout
