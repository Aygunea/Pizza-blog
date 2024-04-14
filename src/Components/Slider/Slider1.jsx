import React from 'react';
import { Carousel } from 'antd';
import './slider.css';

const Slider1 = () => {
    const onChange = (currentSlide) => {
    };
    return (
        <div className='slider'>
            <Carousel afterChange={onChange} >
                <>
                    <div className='slide-context slide1'>
                        <div className="slide-text container">
                            <p className='small-title'>Style Destination</p>
                            <h1 className='slider-title'>Burger Delicious</h1>
                            <h3>It is a long established fact that a reader will be distracted by the readable content</h3>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </>
                <>
                    <div className='slide-context slide2'>
                        <div className="slide-text container">
                            <p className='small-title'>Style Destination</p>
                            <h1 className='slider-title'>Delicious Foods</h1>
                            <h3>It is a long established fact that a reader will be distracted by the readable content</h3>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </>
            </Carousel>
        </div>
    );
};

export default Slider1;
