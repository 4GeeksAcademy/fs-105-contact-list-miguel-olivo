import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { createContact, updateContact } from "../services/fetchs";

const AddContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalReducer();
  const slug = "MIGUEL_OLIVO";

  const initialForm = { name: "", phone: "", email: "", address: "" };
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (id) {
      const contact = store.listaContactos.find((c) => c.id === parseInt(id));
      if (contact) setForm(contact);
    }
  }, [id, store.listaContactos]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateContact(slug, id, form, dispatch);
    } else {
      createContact(slug, form, dispatch);
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <h3>{id ? "Editar" : "Agregar"} Contacto</h3>
      <input name="name" placeholder="Nombre" onChange={handleChange} value={form.name} className="form-control mb-2" />
      <input name="phone" placeholder="Teléfono" onChange={handleChange} value={form.phone} className="form-control mb-2" />
      <input name="email" placeholder="Email" onChange={handleChange} value={form.email} className="form-control mb-2" />
      <input name="address" placeholder="Dirección" onChange={handleChange} value={form.address} className="form-control mb-2" />
      <button type="submit" className="btn btn-success">{id ? "Guardar cambios" : "Agregar contacto"}</button>
    </form>
  );
};

export default AddContact;