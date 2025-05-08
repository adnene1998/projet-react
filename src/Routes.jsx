// src/routes.jsx
import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import ProductList from './Components/ProductList'
import CartPage from './pages/CartPage'
import LayoutHome from './Layout/LayoutHome'
import LayoutAuth from './Layout/LayoutAuth'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutHome />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
       
        </Route>
        
          
      </Routes>
    </Router>
  )
}

export default AppRoutes
