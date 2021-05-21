import React from 'react'
import '../style/Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


const Header = () => {
    return (
        <nav className="header" >
            {/* Logo on the left */}
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt='AmazonLogo' />
            </Link>

            {/* Search Box */}
            <div className="header__search">
                <input type="search" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* 3 Links */}

            <div className="header__nav">
                {/* First Link */}

                <Link to='/login'
                    className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello, Mohamud</span>
                        <span className="header__optionLineTwo">Sign In</span>

                    </div>

                </Link>


                {/* 2nd Link Return Orders */}

                <Link to='/'
                    className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>

                </Link>



                {/* 3rd Link PRIME */}

                <Link to='/'
                    className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>

                    </div>

                </Link>



                {/* 4th Link */}


                <Link to='/login'
                    className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello, Mohamud</span>
                        <span className="header__optionLineTwo">Sign In</span>

                    </div>

                </Link>

                <Link to='/basket'
                    className="header__link">
                    <div className="header__optionBasket">

                        {/* Shopping Basket Icon*/}
                        <ShoppingBasketIcon />


                        {/* Number of Items in the basket*/}
                        <span> 0 </span>

                    </div>

                </Link>



            </div>

            {/* Basket icon with number */}


        </nav>
    )
}

export default Header
