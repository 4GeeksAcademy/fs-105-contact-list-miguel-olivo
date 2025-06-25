import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import AddContact from "./views/AddContact";
import Contact from "./views/Contact";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>

      {/* Página principal con lista de contactos */}
      <Route index element={<Contact />} />

      {/* Vistas adicionales */}
      <Route path="/home" element={<Home />} />
      <Route path="/single/:theId" element={<Single />} />
      <Route path="/demo" element={<Demo />} />

      {/* Crear y editar contacto */}
      <Route path="/add" element={<AddContact />} />
      <Route path="/edit/:id" element={<AddContact />} />

    </Route>
  )
);
