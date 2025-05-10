import React, { useState } from 'react';

const initialStock = [
  { id: 1, produit: 'Produit 1', quantite: 10 },
  { id: 2, produit: 'Produit 2', quantite: 5 },
];

const StockPage = () => {
  const [stock, setStock] = useState(initialStock);
  const [modal, setModal] = useState({ show: false, data: null });
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  // Modification de la quantité
  const handleEdit = (e) => {
    e.preventDefault();
    const id = modal.data.id;
    const quantite = parseInt(e.target.quantite.value, 10);
    setStock(stock.map(item =>
      item.id === id ? { ...item, quantite } : item
    ));
    setModal({ show: false, data: null });
    setAlert({ show: true, type: 'success', message: 'Quantité modifiée avec succès' });
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h2">Gestion du stock</h1>
      </div>

      {alert.show && (
        <div className={`alert alert-${alert.type} mt-2`} role="alert">
          {alert.message}
          <button type="button" className="btn-close float-end" aria-label="Close" onClick={() => setAlert({ show: false, type: '', message: '' })}></button>
        </div>
      )}

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Produit</th>
            <th>Quantité</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((item, idx) => (
            <tr key={item.id}>
              <th>{idx + 1}</th>
              <td>{item.produit}</td>
              <td>{item.quantite}</td>
              <td>
                <button
                  className="btn btn-success me-2"
                  onClick={() => setModal({ show: true, data: item })}
                >
                  Modifier
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Modifier quantité */}
      {modal.show && (
        <div className="modal show d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.3)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleEdit}>
                <div className="modal-header">
                  <h5 className="modal-title">Modifier la quantité</h5>
                  <button type="button" className="btn-close" onClick={() => setModal({ show: false, data: null })}></button>
                </div>
                <div className="modal-body">
                  <div className="form-group mb-2">
                    <label>Quantité :</label>
                    <input
                      type="number"
                      name="quantite"
                      className="form-control"
                      defaultValue={modal.data?.quantite || 0}
                      min="0"
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setModal({ show: false, data: null })}>
                    Fermer
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Modifier
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StockPage;
