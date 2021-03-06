import React from 'react'
import '../style/Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../data/StateProvider'

const Header = () => {

    const [{ basket }] = useStateValue();
    console.log(basket)

    return (
        <nav className="header" >

            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt='AmazonLogo' />
            </Link>


            <div className="header__search">
                <input type="search" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>


            <div className="header__nav">

                <Link to='/login'
                    className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello, Mohamud</span>
                        <span className="header__optionLineTwo">Sign In</span>

                    </div>
                </Link>



                <Link to='/returns'
                    className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>

                </Link>



                <Link to='/'
                    className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>

                    </div>

                </Link>






                <Link to='/basket'
                    className="header__link">
                    <div className="header__optionBasket">

                        <ShoppingCartIcon />

                        <span className="header__optionLineTwo header__basketCount"> {basket?.length} </span>

                    </div>

                </Link>



            </div>

            {/* Basket icon with number */}


        </nav>
    )
}

export default Header
