import React, { useEffect } from 'react'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../Slice/ProductsSlice';
import { addBasket, decrease, removeBasket } from '../../Slice/BasketSlice';
import { Col, Input, Row } from 'antd';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const Cart = () => {
  const dispatch = useDispatch();
  const basket = useSelector(state => state.basket.items);
  const totalPrice = useSelector(state => state.basket.totalPrice.toFixed(2));

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleaddBasket = (item) => {
    dispatch(addBasket(item))
  }
  const handleDecrease = (item) => {
    dispatch(decrease(item))
  }
  const handleRemoveBasket = (item) => [
    dispatch(removeBasket(item))
  ]

  return (

    <div className='cart'>
      <div className="page-heading">
        <div className="container-x">
          <h1>Cart</h1>
          <Link to="/home" id='home'>Home</Link>
          <span>/</span>
          <Link>Your Shopping Cart</Link>
        </div>
      </div>
      <div className="container-x">
        {basket.length > 0 && (
          <>
            <div className='cart-table'>
              <table>
                <thead>
                  <tr>
                    <th>Product name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {basket && basket.map((item) => (
                    <tr key={item.id}>
                      <td className='imagename'>
                        <img src={item.image} alt="" />
                        <p> {item.name}</p>
                      </td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>
                        <div className='quantity'>
                          <span className="count">
                            {item.count}
                          </span>
                          <div className='quantitybtns'>
                            <button style={{ borderBottom: '1px solid #ddd' }} onClick={() => handleaddBasket(item)}>
                              <IoMdArrowDropup />
                            </button>
                            <button onClick={() => handleDecrease(item)}>
                              <IoMdArrowDropdown />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>${(item.price * item.count).toFixed(2)}</td>
                      <td>
                        <button onClick={() => handleRemoveBasket(item)} className='removeBtn'>
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
                <Col xs={24} sm={24} md={16}>
                  <h3>${totalPrice}</h3>
                </Col>
              </Row>
            </div>
          </>
        )}
        {basket.length == 0 && (
          <p>Cart is Empty!</p>
        )}
      </div>
    </div>
  )
}

export default Cart