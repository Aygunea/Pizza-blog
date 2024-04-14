import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BarsOutlined, CloseOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { FaRegHeart } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { CgSearch } from "react-icons/cg";
import logo from '../../assets/images/logo.png'
import './header.css';

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const basket = useSelector(state => state.basket.items);

    const openMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container-x">
                    <ul className="navbar">
                        <Link to="/home">
                            <img className='logo' src={logo} alt="" />
                        </Link>
                        <li>
                            <nav className={`menu ${menuOpen ? 'open' : ''}`}>
                                <ul>
                                    <li><NavLink to="/home">Home</NavLink></li>
                                    <li>
                                        <NavLink to="/home">
                                            Shop
                                            <span className='msg-icn'>
                                                <span>HOT</span>
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li><NavLink to="/home">Featured</NavLink></li>
                                    <li><NavLink to="/home">Pages</NavLink></li>
                                    <li><NavLink to="/home">Blogs</NavLink></li>

                                </ul>
                            </nav>
                        </li>
                        <li>
                            <div className='shopping-area'>
                                <Link><CgSearch /></Link>
                                <Link><FaRegUser /></Link>
                                <Link to='/wishlist'><FaRegHeart /></Link>
                                <Link to="/cart" className='shopping-cart'>
                                    <LiaShoppingBagSolid />
                                    {basket.length > 0 && (
                                        <div className="shopping-count"></div>
                                    )}
                                </Link>
                            </div>
                        </li>
                        <li className='menu-icon' onClick={menuOpen ? closeMenu : openMenu}>
                            {menuOpen ? <CloseOutlined /> : <BarsOutlined />}
                        </li>
                    </ul>
                </div>
                {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
            </header>
        </>
    );
}

export default Header;
