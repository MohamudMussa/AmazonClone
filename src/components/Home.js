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
                    title='2020 Apple iPad (10.2-inch, Wi-Fi, 32GB)'
                    price={800.99}
                    image='https://m.media-amazon.com/images/I/71KivvWmOJL._AC_UY436_FMwebp_QL65_.jpg'
                    rating={5}
                    amount='1,500'
                />


            </div>


            <div className='home__row'>
                <Product
                    id={2}
                    title='Dr. Elseys Premium Clumping Cat Litter'
                    price={21.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/61po%2BblqBuL._AC_SL1000_.jpg'
                    rating={5}
                    amount='3,210'
                />

                <Product
                    id={3}
                    title='Oral-B iO - 9 - Electric Toothbrush Rechargeable Designed'
                    price={219.99}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/81jg%2B8vzmPL._AC_SL1500_.jpg'
                    amount='    992'
                />

                <Product
                    id={4}
                    title='FireStick'
                    price={89.99}
                    image='https://images-eu.ssl-images-amazon.com/images/I/51Da2Z%2BFTFL._AC_UL480_SR480,480_.jpg'
                    rating={5}
                    amount='66,200'
                />
            </div>

            <div className='home__row'>
                <Product
                    id={5}
                    title='SAMSUNG 85-inch Class Crystal UHD'
                    price={21.99}
                    image='https://m.media-amazon.com/images/I/91FcuuZwcrL._AC_SL1500_.jpg'
                    rating={4}
                    amount='44,200'
                />


            </div>


        </div>



    )
}

export default Home
