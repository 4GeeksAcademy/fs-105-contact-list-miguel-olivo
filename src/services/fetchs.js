const url_base = "https://playground.4geeks.com/contact";

export const getAllAgendas = async (dispatch) => {
  const res = await fetch(`${url_base}/agendas`);
  const data = await res.json();
  dispatch({ type: "GUARDAR_Agendas", payload: data.agendas });
};

export const createAgenda = async (slug, dispatch) => {
  await fetch(`${url_base}/agendas/${slug}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
};

export const getContacts = async (slug, dispatch) => {
  const res = await fetch(`${url_base}/agendas/${slug}/contacts`);
  const data = await res.json();
  dispatch({ type: "GUARDAR_Contactos", payload: data.contacts });
};

export const createContact = async (slug, contactData, dispatch) => {
  await fetch(`${url_base}/agendas/${slug}/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactData),
  });
  await getContacts(slug, dispatch);
};

export const updateContact = async (slug, id, updatedData, dispatch) => {
  await fetch(`${url_base}/agendas/${slug}/contacts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  await getContacts(slug, dispatch);
};

export const deleteContact = async (slug, id, dispatch) => {
  await fetch(`${url_base}/agendas/${slug}/contacts/${id}`, {
    method: "DELETE" });
  await getContacts(slug, dispatch);
};