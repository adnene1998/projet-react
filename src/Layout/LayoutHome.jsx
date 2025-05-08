import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Components/Navbar';
import Footer from '../Components/Footer';

const LayoutHome = () => {
  return (
    <div>
      <NavigationBar />
      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutHome;