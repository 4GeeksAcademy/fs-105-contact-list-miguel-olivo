import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteContact } from "../services/fetchs";
import useGlobalReducer from "../hooks/useGlobalReducer";

const ContactCard = ({ contact }) => {
    const [confirm, setConfirm] = useState(false);
    const { dispatch } = useGlobalReducer();
    const slug = "MIGUEL_OLIVO";

    const handleDelete = () => {
        deleteContact(slug, contact.id, dispatch);
        setConfirm(false);
    };

    return (
        <div className="card p-3 mb-3 shadow-sm">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h5>{contact.name}</h5>
                    <p>{contact.phone}</p>
                    <p>{contact.email}</p>
                    <p>{contact.address}</p>
                </div>
                <div>
                    <Link to={`/edit/${contact.id}`} className="btn btn-warning btn-sm me-2">
                        <i className="fa-regular fa-pen-to-square"></i>
                    </Link>
                    <button className="btn btn-danger btn-sm" onClick={() => setConfirm(true)}> <i class="fa-solid fa-trash"></i> </button>
                </div>
            </div>

            {confirm && (
                <div className="mt-3">
                    <p>¿Deseas eliminar este contacto?</p>
                    <button className="btn btn-danger btn-sm me-2" onClick={handleDelete}>Sí</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => setConfirm(false)}>Cancelar</button>
                </div>
            )}
        </div>
    );
};

export default ContactCard;
