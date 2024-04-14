
import React, { useEffect, useState } from 'react';
import './custommodal.css'; // Stil dosyası
import { SlClose } from "react-icons/sl";

const CustomModal = ({ isOpen, onClose, children }) => {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);

    const closeModal = () => {
        setIsModalOpen(false);
        onClose();
    };
    useEffect(() => {
        setIsModalOpen(isOpen);
    }, [isOpen]);
    if (!isModalOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className='modal-window'>
                    <div className="modal-header" onClick={closeModal}>
                            <SlClose />
                    </div>
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomModal;