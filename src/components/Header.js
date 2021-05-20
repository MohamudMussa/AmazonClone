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

            {/* Basket icon with number */}


        </nav>
    )
}

export default Header
