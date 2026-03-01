// import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Cart from './Components/Cart/Cart'
import { ToastContainer } from 'react-toastify'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App