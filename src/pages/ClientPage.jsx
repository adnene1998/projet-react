import React, { useState } from 'react';

const initialClients = [
  { id: 1, nom: 'Client 1', email: 'client1@email.com', status: 'activer' },
  { id: 2, nom: 'Client 2', email: 'client2@email.com', status: 'bloquer' },
];

const ClientPage = () => {
  const [clients, setClients] = useState(initialClients);
  const [modal, setModal] = useState({ show: false, type: '', data: null });
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  // Ajout
  const handleAdd = (e) => {
    e.preventDefault();
    const nom = e.target.nom.value;
    const email = e.target.email.value;
    const status = e.target.status.value;
    setClients([
      ...clients,
      { id: Date.now(), nom, email, status }
    ]);
    setModal({ show: false, type: '', data: null });
    setAlert({ show: true, type: 'success', message: 'Client ajouté avec succès' });
  };

  // Modification
  const handleEdit = (e) => {
    e.preventDefault();
    const id = modal.data.id;
    const nom = e.target.nom.value;
    const email = e.target.email.value;
    const status = e.target.status.value;
    setClients(clients.map(client =>
      client.id === id ? { ...client, nom, email, status } : client
    ));
    setModal({ show: false, type: '', data: null });
    setAlert({ show: true, type: 'success', message: 'Client modifié avec succès' });
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h2">Liste des clients</h1>
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
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, idx) => (
            <tr key={client.id}>
              <th>{idx + 1}</th>
              <td>{client.nom}</td>
              <td>{client.email}</td>
              <td>
                <span className={`badge bg-${client.status === 'activer' ? 'success' : 'danger'}`}>{client.status}</span>
              </td>
              <td>
                <button
                  className="btn btn-success me-2"
                  onClick={() => setModal({ show: true, type: 'edit', data: client })}
                >
                  Modifier
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
                    {modal.type === 'add' ? 'Ajouter Client' : 'Modifier Client'}
                  </h5>
                  <button type="button" className="btn-close" onClick={() => setModal({ show: false, type: '', data: null })}></button>
                </div>
                <div className="modal-body">
                  <div className="form-group mb-2">
                    <label>Nom du client :</label>
                    <input
                      type="text"
                      name="nom"
                      className="form-control"
                      defaultValue={modal.data?.nom || ''}
                      required
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label>Email du client :</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      defaultValue={modal.data?.email || ''}
                      required
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label>Status :</label>
                    <select
                      name="status"
                      className="form-control"
                      defaultValue={modal.data?.status || 'activer'}
                      required
                    >
                      <option value="activer">Activer</option>
                      <option value="bloquer">Bloquer</option>
                    </select>
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

export default ClientPage;
