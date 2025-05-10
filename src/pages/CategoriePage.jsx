import React, { useState } from 'react';

const initialCategories = [
  { id: 1, nom: 'Catégorie 1', description: 'Description 1' },
  { id: 2, nom: 'Catégorie 2', description: 'Description 2' },
];

const CategoriePage = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [modal, setModal] = useState({ show: false, type: '', data: null });
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  // Ajout
  const handleAdd = (e) => {
    e.preventDefault();
    const nom = e.target.nom.value;
    const description = e.target.description.value;
    setCategories([
      ...categories,
      { id: Date.now(), nom, description }
    ]);
    setModal({ show: false, type: '', data: null });
    setAlert({ show: true, type: 'success', message: 'Catégorie ajoutée avec succès' });
  };

  // Modification
  const handleEdit = (e) => {
    e.preventDefault();
    const id = modal.data.id;
    const nom = e.target.nom.value;
    const description = e.target.description.value;
    setCategories(categories.map(cat =>
      cat.id === id ? { ...cat, nom, description } : cat
    ));
    setModal({ show: false, type: '', data: null });
    setAlert({ show: true, type: 'success', message: 'Catégorie modifiée avec succès' });
  };

  // Suppression
  const handleDelete = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette catégorie ?")) {
      setCategories(categories.filter(cat => cat.id !== id));
      setAlert({ show: true, type: 'danger', message: 'Catégorie supprimée avec succès' });
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3 position-relative">
        <h1 className="h2">Liste des catégories</h1>
        <button className="btn btn-primary position-absolute end-0 top-50 translate-middle-y" style={{ right: '24px' }} onClick={() => setModal({ show: true, type: 'add', data: null })}>
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
          {categories.map((cat, idx) => (
            <tr key={cat.id}>
              <th>{idx + 1}</th>
              <td>{cat.nom}</td>
              <td>{cat.description}</td>
              <td>
                <button
                  className="btn btn-success me-2"
                  onClick={() => setModal({ show: true, type: 'edit', data: cat })}
                >
                  Modifier
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(cat.id)}
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
                    {modal.type === 'add' ? 'Ajouter Catégorie' : 'Modifier Catégorie'}
                  </h5>
                  <button type="button" className="btn-close" onClick={() => setModal({ show: false, type: '', data: null })}></button>
                </div>
                <div className="modal-body">
                  <div className="form-group mb-2">
                    <label>Nom de la catégorie :</label>
                    <input
                      type="text"
                      name="nom"
                      className="form-control"
                      defaultValue={modal.data?.nom || ''}
                      required
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label>Description de la catégorie :</label>
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

export default CategoriePage;
