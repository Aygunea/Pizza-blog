import React, { useEffect } from 'react'
import './wishlist.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../Slice/ProductsSlice';
import { Button, Col, Input, Row } from 'antd';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { addBasket } from '../../Slice/BasketSlice';
import { removeWishlist } from '../../Slice/WishlistSlice';
import { ToastContainer, toast } from 'react-toastify';

const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist.items);
    const notify = (product) => toast.success(<>{product.name} is successfully added to Cart!</>);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleaddBasket = (item) => {
        dispatch(addBasket(item))
        notify(item)
    }
    const handleremoveWishlist = (item) => {
        dispatch(removeWishlist(item))
    }


    return (

        <div className='cart'>
            <div className="page-heading">
                <div className="container-x">
                    <h1>Cart</h1>
                    <Link to="/home" id='home'>Home</Link>
                    <span>/</span>
                    <Link>Your Wishlist</Link>
                </div>
            </div>
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
                {wishlist.length > 0 && (
                    <>
                        <div className='cart-table'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product name</th>
                                        <th>Price</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {wishlist && wishlist.map((item) => (
                                        <tr key={item.id}>
                                            <td className='imagename'>
                                                <img src={item.image} alt="" />
                                                <p> {item.name}</p>
                                            </td>
                                            <td>${item.price.toFixed(2)}</td>
                                            <td>
                                                <button onClick={() => handleaddBasket(item)}>Add To Cart</button>
                                            </td>
                                            <td>
                                                <button className='removeBtn' onClick={() => handleremoveWishlist(item)} >
                                                    <IoMdClose />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <Row>
                            <Col xs={24} sm={24} md={12}>
                                <div className="cart-buttons">
                                    <button className='btn'>Update Cart</button>
                                    <button className='btn-green'>Continue Shopping</button>
                                </div>
                            </Col>
                        </Row>
                        <div className="cart-totals">
                            <div className='cart-title'>Cart Totals</div>
                            <Row>
                                <Col xs={24} sm={24} md={6}>
                                    <p>Total</p>
                                    <button className='btn-green'>Proceed to checkout</button>
                                </Col>
                            </Row>
                        </div>
                    </>
                )}
                {wishlist.length == 0 && (
                    <p>Wishlist is Empty!</p>
                )}
            </div>
        </div>
    )
}

export default Wishlist