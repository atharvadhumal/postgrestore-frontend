import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import {Routes, Route} from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <div className='min-h-screen bg-base-200 transition-colors duration-300'>
      <Navbar />
 
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product/:id" element={<ProductPage/>} />

      </Routes>

      <Toaster />
    </div>
  )
}

export default App