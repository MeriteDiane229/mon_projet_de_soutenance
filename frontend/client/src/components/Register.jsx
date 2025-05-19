import React, { useState } from 'react';
import '../styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'visiteur',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Nom complet requis';
    if (!formData.email.trim()) newErrors.email = 'Email requis';
    if (!formData.password) newErrors.password = 'Mot de passe requis';
    else if (formData.password.length < 6) newErrors.password = '6 caractères min.';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage('');
    } else {
      setErrors({});
      try {
        // Ne pas inclure confirmPassword dans l'envoi au backend
        const { fullName, email, password, role } = formData;
        const res = await fetch('http://localhost:5000/api/users/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName, email, password, role }),
        });

        const data = await res.json();

        if (!res.ok) {
          setErrors({ api: data.message || 'Erreur serveur' });
          setSuccessMessage('');
        } else {
          setSuccessMessage('Inscription réussie !');
          setFormData({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: 'visiteur',
          });
        }
      } catch (err) {
        setErrors({ api: 'Erreur de connexion au serveur' });
      }
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="register-container">
      <h2>Inscription</h2>
      <p className="register-description">
        Remplissez le formulaire pour créer un compte. Tous les champs sont obligatoires.
      </p>

      {errors.api && <p className="error">{errors.api}</p>}
      {successMessage && <p className="success">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="register-form">
        <label>
          Nom complet
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Mot de passe
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </label>

        <label>
          Confirmation du mot de passe
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </label>

        <label>
          Rôle
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="visiteur">Visiteur</option>
            <option value="guide">Guide</option>
          </select>
        </label>

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Register;
