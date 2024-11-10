import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import Payment from './components/payment/Payment'
import Success from './pages/OrderSuccess/Success'
import TrackOrder from './pages/trackOrder/TrackOrder'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'; // Import Privacy Policy component
import About from './pages/About/About'; // Import the About component
import Policy from './pages/Policy/Policy';
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";



const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
        <Navbar setShowLogin={setShowLogin}  />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/ordersuccess' element={<Success />} />
          <Route path="/track-order/:orderId" element={<TrackOrder />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} /> {/* Privacy Policy route */}
          <Route path="/about" element={<About />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
