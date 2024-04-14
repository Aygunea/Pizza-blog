// ProductList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './products.css'
import { PiMinusLight } from "react-icons/pi";
import { Col, Row } from 'antd';
import { fetchCategories } from '../../Slice/ProductsSlice';
import { addBasket } from '../../Slice/BasketSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CgSearch } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { addWishlist } from '../../Slice/WishlistSlice';

const ProductList = () => {
    const dispatch = useDispatch();
    const productlist = useSelector(state => state.products.items);
    const wishlist = useSelector(state => state.wishlist.items);
    const loading = useSelector(state => state.products.loading)
    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const notify = (product) => toast.success(<>{product.name} is successfully added to Cart!</>);

    const handleaddBasket = (item) => {
        dispatch(addBasket(item))
        notify(item)
    }
    const handleaddWishlist = (item) => {
        dispatch(addWishlist(item))
    }
    const isInWishlist = (id) => {
        return wishlist.some(item => item.id === id);
    };

    return (
        <div className="container-x">
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition:Bounce
                toastClassName="custom-toast"
            />
            <div className="section-caption">
                <h2>Best Seller</h2>
                <span id='greenline'></span>
                <p>Best Seller Product This Week!</p>
            </div>
            <div className='productList'>
                {loading ? (
                    <svg viewBox="25 25 50 50">
                        <circle r="20" cy="50" cx="50"></circle>
                    </svg>
                ) : (
                    <Row>
                        {productlist.map(product => {
                            return <Col sm={24} md={12} lg={6} key={Number(product.id)}>
                                <div className="card-inner">
                                    <div className="card">
                                        {product.sale && (
                                            <div className="sale">
                                                -{product.sale}%
                                            </div>
                                        )}
                                        <div className="img">
                                            <div className="image-box">
                                                <Link to={`/products/${product.id}`}>
                                                    <img src={product.image} alt={product.name} />
                                                </Link>
                                                <div className="overlay">
                                                    <p onClick={() => handleaddBasket(product)}><LiaShoppingBagSolid /></p>
                                                    <p> <CgSearch /></p>
                                                    <p onClick={() => handleaddWishlist(product)}>
                                                        {isInWishlist(product.id) ? <FaHeart /> : <FaRegHeart />}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p>{product.name}</p>

                                            <div className="card-end">
                                                {product.prevprice && (
                                                    <>
                                                        <span className='prev-price'>
                                                            <del> £{product.prevprice}.00 </del>
                                                        </span>
                                                        <span><PiMinusLight /></span>
                                                    </>
                                                )}
                                                <span className='product-price'>£{product.price}.00</span>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Col>

                        }
                        )}
                    </Row>
                )}


            </div>
        </div>

    );
};

export default ProductList;
