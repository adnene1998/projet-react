// src/routes.jsx
import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import ProductList from './Components/ProductList'
import CartPage from './pages/CartPage'
import LayoutHome from './Layout/LayoutHome'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import AuthPageAdmin from './pages/AuthPageAdmin' // Import de la page AuthPageAdmin
import LayoutDashbord from './Layout/LayoutDashbord'; // Import du LayoutDashbord
import DashboardPage from './pages/DashboardPage'; // Import du DashboardPage
import ProduitPage from './pages/ProduitPage';
import CategoriePage from './pages/CategoriePage';
import StockPage from './pages/StockPage';
import ClientPage from './pages/ClientPage';

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
        
        <Route path="/adminAuth" element={<AuthPageAdmin />} />
        <Route element={<LayoutDashbord />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/produits" element={<ProduitPage />} />
          <Route path="/categories" element={<CategoriePage />} />
          <Route path="/stock" element={<StockPage />} />
          <Route path="/clients" element={<ClientPage />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default AppRoutes
