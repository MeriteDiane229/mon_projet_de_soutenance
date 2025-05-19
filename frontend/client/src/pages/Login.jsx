import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { useAuth } from '../context/AuthContext';
import '../styles/Login.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // corrigé ici
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password); // corrigé ici
      login(data);

      if (data.role === "admin") navigate("/admin/dashboard");
      else if (data.role === "guide") navigate("/guide/dashboard");
      else navigate("/");
    } catch (err) {
      console.error("Erreur de connexion :", err);
      setError("Échec de la connexion.");
    }
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
