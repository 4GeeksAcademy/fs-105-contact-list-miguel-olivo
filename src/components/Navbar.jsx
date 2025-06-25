// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand"> Contactos</Link>

      <div className="ml-auto d-flex gap-2">
        <Link to="/add" className="btn btn-outline-primary me-2"> + Nuevo Contacto</Link>
        <Link to="/" className="btn btn-outline-secondary">Inicio</Link>
      </div>
    </nav>
  );
};
