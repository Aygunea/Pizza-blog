import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './detailpage.css'
import { addBasket, decrease } from '../../Slice/BasketSlice';
import { ToastContainer, toast } from 'react-toastify';
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { Col, Row } from 'antd';
import './detailpage.css'
import { fetchCategories } from '../../Slice/ProductsSlice';
import { addWishlist } from '../../Slice/WishlistSlice';
import { FaRegHeart, FaHeart } from "react-icons/fa";

const DetailPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const productlist = useSelector(state => state.products.items);
    const wishlist = useSelector(state => state.wishlist.items);
    const notify = (product) => toast.success(<>{product.name} is successfully added to Cart!</>);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleaddBasket = (item) => {
        dispatch(addBasket(item))
        notify(item)
    }

    const handledecrease = (item) => {
        dispatch(decrease(item))
    }

    const handleaddWishlist = (item) => {
        dispatch(addWishlist(item))
    }

    const isInWishlist = (id) => {
        return wishlist.some(item => item.id === id);
    };

    const product = productlist.find(item => item.id === id);

    if (!product) {
        return <div className='detailpage'>Ürün bulunamadı.</div>;
    }

    return (
        <div className='detailpage'>
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
                <Row>
                    <Col md={12}>
                        <img src={product.image} alt={product.name} />
                    </Col>
                    <Col md={12} className='detail-info'>
                        <div className='detail-head'>
                            <div className='detail-name'>{product.name}</div>
                            <p onClick={() => handleaddWishlist(product)}>
                                {isInWishlist(product.id) ? <FaHeart /> : <FaRegHeart />}
                            </p>
                        </div>
                        <p className='detail-price'>${product.price} USD</p>
                        <p className='detail-text'>Things You Need To Know There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to...</p>
                        <Row className='detail-row'>
                            <Col xs={8} sm={4} md={10} lg={5}>
                                <div className='quantity'>
                                    <span className="count">
                                        {product.count}
                                    </span>
                                    <div className='quantitybtns'>
                                        <button style={{ borderBottom: '1px solid #ddd' }} onClick={() => handleaddBasket(product)}>
                                            <IoMdArrowDropup />
                                        </button>
                                        <button onClick={() => handledecrease(product)}>
                                            <IoMdArrowDropdown />
                                        </button>
                                    </div>
                                </div>
                            </Col>
                            <Col className='detail-btn' xs={16} sm={20} md={14} lg={19}>
                                <button className='btn-green' onClick={() => handleaddBasket(product)}>Add To Cart</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default DetailPage;
