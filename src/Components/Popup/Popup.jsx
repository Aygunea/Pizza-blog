import React, { useState, useEffect } from 'react';
import './popup.css'; // Stilleri dosyası
import { useSelector } from 'react-redux';
import { IoCloseSharp } from "react-icons/io5";

const Popup = ({ isOpen, onClose }) => {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const productlist = useSelector(state => state.products.items);

    useEffect(() => {
        let timer;

        const showNextProduct = () => {
            setCurrentProductIndex(prevIndex => (prevIndex + 1) % productlist.length);
            timer = setTimeout(showNextProduct, 5000);
        };

        if (isOpen && productlist && productlist.length > 0) {
            timer = setTimeout(showNextProduct, 5000);
        }
        return () => clearTimeout(timer);
    }, [isOpen, productlist]);

    const currentProduct = productlist[currentProductIndex];

    if (!isOpen || !productlist || productlist.length === 0) return null;

    return (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={onClose}>
                    <IoCloseSharp />
                </button>
                <div className='popup-content' key={currentProduct.id}>
                    <img src={currentProduct.image} alt="" />
                    <div className="popup-body">
                        <h3>{currentProduct.name}</h3>
                        <p>About 53 minutes ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Popup;