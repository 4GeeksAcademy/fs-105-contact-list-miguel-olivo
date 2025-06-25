import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getAllAgendas, createAgenda, getContacts } from "../services/fetchs";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const { listaAgendas } = store;
  const myUser = "MIGUEL_OLIVO";

  const handleCreateAgenda = async () => {
    const existe = listaAgendas.some((a) => a.slug === myUser);
    if (!existe) await createAgenda(myUser, dispatch);
  };

  useEffect(() => {
    getAllAgendas(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (listaAgendas.length > 0) {
      handleCreateAgenda();
      getContacts(myUser, dispatch);
    }
  }, [listaAgendas]);

  return (
    <div className="text-center mt-5">
      <h1>Agenda de Contactos</h1>
    </div>
  );
};
