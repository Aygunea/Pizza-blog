import React, { useRef } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaInstagram } from "react-icons/fa";
import './posts.css'

const Posts = () => {
    let posts = [
        {
            "id": "1",
            "image": "./src/assets/images/instagram1.webp"
        },
        {
            "id": "2",
            "image": "./src/assets/images/instagram2.webp"
        },
        {
            "id": "3",
            "image": "./src/assets/images/instagram3.webp"
        },
        {
            "id": "4",
            "image": "./src/assets/images/instagram4.webp"
        },
        {
            "id": "5",
            "image": "./src/assets/images/instagram5.webp"
        },
        {
            "id": "6",
            "image": "./src/assets/images/instagram6.webp"
        }
    ]

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
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
        <div className='posts'>
            <div className="container-x">
                <div className="section-caption">
                    <h2>FONE ON INSTAGRAM</h2>
                    <span id='greenline'></span>
                    <p className='instagram-desc'>#fone</p>
                </div>
                <Slider ref={slider => {
                    sliderRef = slider;
                }}
                    {...settings}>
                    {posts && posts.map((product, index) => (
                        <div className="card" key={product.id}>
                            <div className="image-inner">
                                <img key={index} src={product.image} alt={product.name} />
                            </div>
                            <div className="overlay-post">
                                <FaInstagram />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Posts