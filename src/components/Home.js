import React from 'react'
import '../style/Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/launch/gateway/TheUndergroundRailroad/UGRR_S1_GWBleedingHero_POST_XSite_3000x1200_PV_en-GB._CB669781769_.jpg"
                alt="amazonImage" />


            <Product
                id={1}
                title='FireStick'
                price={21.99}
                image='https://images-eu.ssl-images-amazon.com/images/I/51Da2Z%2BFTFL._AC_UL480_SR480,480_.jpg'
                rating={5}
            />


        </div>



    )
}

export default Home
