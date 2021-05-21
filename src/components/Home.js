import React from 'react'
import '../style/Home.css'
import Deals from './Deals'
import Product from './Product'

const Home = () => {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/launch/gateway/TheUndergroundRailroad/UGRR_S1_GWBleedingHero_POST_XSite_3000x1200_PV_en-GB._CB669781769_.jpg"
                alt="amazonImage" />

            <div className='home__row'>
                <Deals
                    title="Find your ideal TV"
                    image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY608_CB432517900_.jpg'
                    link=''

                />

                <Deals
                    title="Beauty picks"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg"
                    link=''

                />

                <Product
                    id={1}
                    title='FireStick'
                    price={21.99}
                    image='https://images-eu.ssl-images-amazon.com/images/I/51Da2Z%2BFTFL._AC_UL480_SR480,480_.jpg'
                    rating={5}
                />


            </div>


            <div className='home__row'>


                <Product
                    id={1}
                    title='FireStick'
                    price={21.99}
                    image='https://images-eu.ssl-images-amazon.com/images/I/51Da2Z%2BFTFL._AC_UL480_SR480,480_.jpg'
                    rating={5}
                />

                <Product
                    id={1}
                    title='FireStick'
                    price={21.99}
                    rating={5}
                    image='https://images-eu.ssl-images-amazon.com/images/I/51Da2Z%2BFTFL._AC_UL480_SR480,480_.jpg'

                />

                <Product
                    id={1}
                    title='FireStick'
                    price={21.99}
                    rating={5}
                    image='https://images-eu.ssl-images-amazon.com/images/I/51Da2Z%2BFTFL._AC_UL480_SR480,480_.jpg'

                />


            </div>


        </div>



    )
}

export default Home
