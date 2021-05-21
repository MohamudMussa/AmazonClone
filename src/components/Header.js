import React from 'react'
import '../style/Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

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
                        <span>Hello, Mohamud</span>
                        <span>Sign In</span>

                    </div>

                </Link>


                {/* 2nd Link Return Orders */}

                <Link to='/'
                    className="header__link">
                    <div className="header__option">
                        <span>Returns</span>
                        <span>& Orders</span>
                    </div>

                </Link>



                {/* 3rd Link PRIME */}

                <Link to='/'
                    className="header__link">
                    <div className="header__option">
                        <span>Your</span>
                        <span>Prime</span>

                    </div>

                </Link>



                {/* 4th Link */}


                <Link to='/login'
                    className="header__link">
                    <div className="header__option">
                        <span>Hello, Mohamud</span>
                        <span>Sign In</span>

                    </div>

                </Link>


            </div>

            {/* Basket icon with number */}


        </nav>
    )
}

export default Header
