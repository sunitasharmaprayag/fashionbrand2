import React, { useState } from 'react';
import './Header.css';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/Dawn_logo (2).webp';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <header id='p1'>
            <div className="shipping-container">
            <div className="shipping-underline"></div>

                <div className="shipping">Free Shipping on All Orders!</div>
                <div className="shipping-underline"></div>
            </div>

            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand logo" href="#">
                    <img src={logo} alt="Fashion Brand Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={() => toggleMenu('bags')} aria-haspopup="true" aria-expanded={openMenu === 'bags'}>
                                Bags {openMenu === 'bags' ? '▲' : '▼'}
                            </a>
                            {openMenu === 'bags' && (
                                <ul className="submenu">
                                    <li><a href="/shop-all">Shop All</a></li>
                                    <li><a href="/tote-bag">Tote Bag</a></li>
                                    <li><a href="/shoulder-bag">Shoulder Bag</a></li>
                                    <li><a href="/crossbody-bags">Crossbody Bags</a></li>
                                    <li><a href="/mini-bag">Mini Bag</a></li>
                                </ul>
                            )}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={() => toggleMenu('shoes')} aria-haspopup="true" aria-expanded={openMenu === 'shoes'}>
                                Shoes {openMenu === 'shoes' ? '▲' : '▼'}
                            </a>
                            {openMenu === 'shoes' && (
                                <ul className="submenu">
                                    <li><a href="/shop-all">Shop All</a></li>
                                    <li><a href="/sandals">Sandals</a></li>
                                    <li><a href="/boots">Boots</a></li>
                                </ul>
                            )}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Lookbook</a>
                        </li>
                    </ul>
                </div>

                <div className="header-icons">
                    <FaSearch className="icon" />
                    <FaUser className="icon" />
                    <FaShoppingCart className="icon" />
                </div>
            </nav>
            
        </header>
    );
};

export default Header;
