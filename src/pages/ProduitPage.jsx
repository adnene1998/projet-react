import React, { useState } from 'react';

const initialProduits = [
  { id: 1, nom: 'Produit 1', description: 'Description du produit 1' },
  { id: 2, nom: 'Produit 2', description: 'Description du produit 2' },
];

const ProduitPage = () => {
  const [produits, setProduits] = useState(initialProduits);
  const [modal, setModal] = useState({ show: false, type: '', data: null });
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  // Ajout
  const handleAdd = (e) => {
    e.preventDefault();
    const nom = e.target.nom.value;
    const description = e.target.description.value;
    setProduits([
      ...produits,
      { id: Date.now(), nom, description }
    ]);
    setModal({ show: false, type: '', data: null });
    setAlert({ show: true, type: 'success', message: 'Produit ajouté avec succès' });
  };

  // Modification
  const handleEdit = (e) => {
    e.preventDefault();
    const id = modal.data.id;
    const nom = e.target.nom.value;
    const description = e.target.description.value;
    setProduits(produits.map(prod =>
      prod.id === id ? { ...prod, nom, description } : prod
    ));
    setModal({ show: false, type: '', data: null });
    setAlert({ show: true, type: 'success', message: 'Produit modifié avec succès' });
  };

  // Suppression
  const handleDelete = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce produit ?")) {
      setProduits(produits.filter(prod => prod.id !== id));
      setAlert({ show: true, type: 'danger', message: 'Produit supprimé avec succès' });
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h2">Liste des produits</h1>
        <button className="btn btn-primary" onClick={() => setModal({ show: true, type: 'add', data: null })}>
          Ajouter
        </button>
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
            <th>Nom</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {produits.map((prod, idx) => (
            <tr key={prod.id}>
              <th>{idx + 1}</th>
              <td>{prod.nom}</td>
              <td>{prod.description}</td>
              <td>
                <button
                  className="btn btn-success me-2"
                  onClick={() => setModal({ show: true, type: 'edit', data: prod })}
                >
                  Modifier
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(prod.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Ajouter/Modifier */}
      {modal.show && (
        <div className="modal show d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.3)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={modal.type === 'add' ? handleAdd : handleEdit}>
                <div className="modal-header">
                  <h5 className="modal-title">
                    {modal.type === 'add' ? 'Ajouter Produit' : 'Modifier Produit'}
                  </h5>
                  <button type="button" className="btn-close" onClick={() => setModal({ show: false, type: '', data: null })}></button>
                </div>
                <div className="modal-body">
                  <div className="form-group mb-2">
                    <label>Nom du produit :</label>
                    <input
                      type="text"
                      name="nom"
                      className="form-control"
                      defaultValue={modal.data?.nom || ''}
                      required
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label>Description du produit :</label>
                    <textarea
                      name="description"
                      className="form-control"
                      defaultValue={modal.data?.description || ''}
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setModal({ show: false, type: '', data: null })}>
                    Fermer
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {modal.type === 'add' ? 'Ajouter' : 'Modifier'}
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

export default ProduitPage;
