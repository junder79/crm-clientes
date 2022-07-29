import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import EditarCliente from "./paginas/EditarCliente";
import Inicio from "./paginas/Inicio";

import NuevoCliente from "./paginas/NuevoCliente";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Inicio />}></Route>
          <Route path="nuevo" element={<NuevoCliente />}></Route>
          <Route path="editar" element={<EditarCliente />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
