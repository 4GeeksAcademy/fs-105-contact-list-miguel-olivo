export const initialStore = () => ({
  message: null,
  listaAgendas: [],
  listaContactos: []
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "GUARDAR_Agendas":
      return { ...store, listaAgendas: action.payload };
    case "GUARDAR_Contactos":
      return { ...store, listaContactos: action.payload };
    default:
      throw Error("No se puede realizar la acción");
  }
}
