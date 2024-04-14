import React from 'react'
import ProductList from './Components/Products/Products'
import Slider1 from './Components/Slider/Slider1'
import Slider2 from './Components/Slider2/Slider2'
import Banner from './Components/Banner/Banner'
import Posts from './Components/InstagramPosts/Posts'

const Home = () => {

    return (
        <>
            <Slider1 />
            <Slider2 />
            <ProductList />
            <Banner />
            <Posts />
        </>
    )
}

export default Home