import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer'; // Importation du composant Footer

const AuthPageAdmin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Exemple de validation simple
    if (email === 'admin@example.com' && password === 'admin123') {
      Swal.fire({
        title: 'Succès',
        text: 'Connexion réussie !',
        icon: 'success',
        timer: 2000,
      });
      // Redirection ou autre logique après connexion
    } else {
      Swal.fire({
        title: 'Erreur',
        text: 'Coordonnées non valides',
        icon: 'error',
        timer: 2000,
      });
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#f1f1f2' }}> {/* Application de la couleur d'arrière-plan */}
      <div className="container my-auto">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6"> {/* Augmentation de la largeur du formulaire */}
            <div className="card shadow-sm p-5"> {/* Ajout de padding pour agrandir le contenu */}
              <h2 className="text-center mb-4">Espace Admin : Connexion</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Adresse Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Se connecter</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthPageAdmin;