import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Deals.css'

const Deals = ({ title, image, link }) => {
    return (
        <div className="deals">

            <div className="div__info">


                {/* title */}
                <h2 className='deals__image'> {title} </h2>

                {/* img */}
                <img className="deals__image" src={image} alt="productImage" />

                {/* see more */}

                <Link className="deals__link"> See More </Link>


            </div>


        </div>
    )
}

export default Deals
