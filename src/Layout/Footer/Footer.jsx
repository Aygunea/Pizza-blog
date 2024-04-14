import React from 'react';
import { Col, Row } from 'antd';
import cards from '../../assets/images/logoo-removebg-preview.png'
import logo from '../../assets/images/logo.png'
import { FaTwitter, FaInstagram, FaBehance, FaDribbble } from "react-icons/fa";
import './footer.css'

const Footer = () => (
    <footer className='container-x'>
        <div className="footer-head">
            <Row>
                <Col xs={24} sm={24} md={24} lg={6} xl={6} className='info-footer-end'>
                    <img className='logo' src={logo} alt="" />
                    <p>Sophisticated simplicity for the
                        independent mind.</p>
                    <div className="social-icons">
                        <FaTwitter />
                        <FaDribbble />
                        <FaBehance />
                        <FaInstagram />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={8} lg={6} xl={6}>
                    <ul>
                        <li>
                            <p className='footer-title'>Help & Information</p>
                            <p className='footer-line'></p>
                        </li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Products Return</a></li>
                        <li><a href="#">Wholesale Policy</a></li>
                    </ul>
                </Col>
                <Col xs={24} sm={24} md={8} lg={6} xl={6}>
                    <ul>
                        <li>
                            <p className='footer-title'>About Us</p>
                            <p className='footer-line'></p>
                        </li>
                        <li><a href="">Pagination</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Accessories</a></li>
                        <li><a href="">Home Page</a></li>
                    </ul>
                </Col>
                <Col xs={24} sm={24} md={8} lg={6} xl={6}>
                    <ul>
                        <li>
                            <p className='footer-title'>Categories</p>
                            <p className='footer-line'></p>
                        </li>
                        <li><a href="">Menu items</a></li>
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Address Store</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">HomePage</a></li>
                    </ul>
                </Col>
            </Row>
        </div>
        <Row>
            <Col className='copyright'>
                <p>© Copyright 2022 | Fone By EngoTheme. Powered by Shopify.</p>
                <img src={cards} alt="" />
            </Col>
        </Row>
    </footer>
);

export default Footer;