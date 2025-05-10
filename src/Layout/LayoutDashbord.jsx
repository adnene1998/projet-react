import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, File, ShoppingCart, Users } from 'react-feather';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

const LayoutDashbord = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <nav className="d-flex flex-column bg-dark text-white p-3" style={{ width: '250px', minHeight: '100vh' }}>
        <h2 className="text-center mb-4">Dashboard</h2>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                "nav-link text-white bg-transparent border-0 text-start" +
                (isActive ? " active" : "")
              }
              style={{ textDecoration: "none" }}
            >
              <Home className="align-text-bottom" /> Accueil
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                "nav-link text-white bg-transparent border-0 text-start" +
                (isActive ? " active" : "")
              }
              style={{ textDecoration: "none" }}
            >
              <File className="align-text-bottom" /> Catégorie
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink
              to="/produits"
              className={({ isActive }) =>
                "nav-link text-white bg-transparent border-0 text-start" +
                (isActive ? " active" : "")
              }
              style={{ textDecoration: "none" }}
            >
              <ShoppingCart className="align-text-bottom" /> Produits
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink
              to="/stock"
              className={({ isActive }) =>
                "nav-link text-white bg-transparent border-0 text-start" +
                (isActive ? " active" : "")
              }
              style={{ textDecoration: "none" }}
            >
              <ShoppingCart className="align-text-bottom" /> Stock
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink
              to="/clients"
              className={({ isActive }) =>
                "nav-link text-white bg-transparent border-0 text-start" +
                (isActive ? " active" : "")
              }
              style={{ textDecoration: "none" }}
            >
              <Users className="align-text-bottom" /> Clients
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-grow-1 p-4" style={{ backgroundColor: '#f8f9fa' }}>
        <header className="mb-4 position-relative">
          <button
            className="btn btn-primary position-absolute end-0 top-50 translate-middle-y me-2"
            onClick={() => navigate('/adminAuth')}
          >
            Déconnexion
          </button>
        </header>
        <main>
          <Outlet />
          {children}
        </main>
      </div>
    </div>
  );
};

export default LayoutDashbord;

