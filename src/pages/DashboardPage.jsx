import React from 'react';
import StatCard from '../Components/StatCard';

const DashboardPage = () => {
  // Ces valeurs peuvent venir d'une API ou d'un state global
  const stats = {
    produits: 120,
    client: 100,
    categories: 8,
  };

  return (
    <div className="container">
      <h1 className="h3 text-center mb-4">Bienvenue dans le tableau de bord</h1>
      <div className="row">
        <StatCard color="primary" icon="shopping-cart" title="Nombre de produits :" value={stats.produits} />
        <StatCard color="danger" icon="users" title="Nombre de clients :" value={stats.client} />
        <StatCard color="success" icon="tags" title="Nombre de catégories :" value={stats.categories} />
      </div>
    </div>
  );
};

export default DashboardPage;
