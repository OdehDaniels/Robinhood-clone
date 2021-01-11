import React from 'react'
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import Logo from './robinhood.svg';
import './Header.css';

function Header() {
    return (
        <div className="header__wrapper">
            {/* Logo */}
            <div className="header__logo">
                <img src={Logo} width={25} />
            </div>
            {/* Search Bar */}
            <div className="header__search">
                <div className="header__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            {/* Menu items */}
            <div className="header__menuItems">
                <a href="#">Free Stock</a>
                <a href="#">Portfolio</a>
                <a href="#">Cash</a>
                <a href="#">Messages</a>
                <a href="#">Account</a>
            </div>
        </div>
    )
}

export default Header
