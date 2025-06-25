import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { createAgenda, getContacts } from "../services/fetchs";
import ContactCard from "../components/ContactCard";
import { Link } from "react-router-dom";

const Contact = () => {
  const { store, dispatch } = useGlobalReducer();
  const { listaContactos } = store;
  const slug = "MIGUEL_OLIVO";

  useEffect(() => {
    createAgenda(slug, dispatch); // asegura la agenda
    getContacts(slug, dispatch); // carga contactos
  }, []);

  return (
    <div className="container mt-4">
      <h2>Agenda de Contactos</h2>
      <Link to="/add" className="btn btn-primary mb-3">+ Nuevo Contacto</Link>
      {Array.isArray(listaContactos) && listaContactos.length === 0 && (
  <p>No hay contactos disponibles.</p>
)}

     {Array.isArray(listaContactos) && listaContactos.map(contact => (
  <ContactCard key={contact.id} contact={contact} />
))}

    </div>
  );
};

export default Contact;