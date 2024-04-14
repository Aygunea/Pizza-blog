import React, { useRef } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
import './slider2.css'

const Slider2 = () => {
    const productlist = useSelector(state => state.products.items);
    let sliderRef = useRef(null);
    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            />
        );
    }
    const settings = {
        arrows: true,
        dots:false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='carousel'>
            <div className="container-x">
                <Slider ref={slider => {
                    sliderRef = slider;
                }}
                    {...settings}>

                    {productlist && productlist.map(product => (
                        <div className="card" key={product.id}>
                            {product.infosale && (
                                <div className="info sale">
                                    {product.infosale}
                                </div>
                            )}

                            <img src={product.imagebg} alt={product.name} />
                            <div className="card-body">
                                <p>{product.name}</p>
                                <p className='description'>{product.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Slider2