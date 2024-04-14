import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import { Outlet } from 'react-router-dom';
import CustomModal from './Components/CustomModal/CustomModal';
import Popup from './Components/Popup/Popup';
import { useState } from 'react';
import './App.css';

function App() {
  const [IsPopupOpen, setIsPopupOpen] = useState(true)
  return (
    <div>
    <Popup isOpen={IsPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <CustomModal isOpen={true} onClose={() => { }}>
        <h3>SIGNUP FOR EMAILS</h3>
        <span id='brownline'></span>
        <h1>GET 20% DISCOUNT SHIPPED TO YOUR INBOX</h1>
        <p>Subscribe to our newsletter and we will ship 20% discount code today</p>
        <form action="#">
          <div className="form-group">
            <input type="text" placeholder="Enter Your Email ..." />
            <button>Subscribe</button>
          </div>
        </form>
        <a href="#">No, Thanks.</a>
      </CustomModal>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;