import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const VerCliente = () => {
  const { id } = useParams();
  const [cliente, setCliente] = useState([]);
  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {}
    };
    obtenerClienteAPI();
  }, []);
  return (
    <div>
      <h1 className="font-black text-4xl text-blue-900">
        Ver Cliente: {cliente.nombre}
      </h1>
      <p className="mt-3">Información del Cliente</p>
      <p className="text-4xl text-gray-600 mt-10">
        <span className="text-gray-800 uppercase font-bold">Cliente</span>
        <p>{cliente.nombre}</p>
      </p>
      <p className="text-2xl text-gray-600 mt-4">
        <span className="text-gray-800 uppercase font-bold">Email</span>
        <p>{cliente.email}</p>
      </p>
      <p className="text-2xl text-gray-600 mt-4">
        <span className="text-gray-800 uppercase font-bold">Teléfono</span>
        <p>{cliente.telefono}</p>
      </p>
      <p className="text-2xl text-gray-600 mt-4">
        <span className="text-gray-800 uppercase font-bold">Empresa</span>
        <p>{cliente.empresa}</p>
      </p>
      <p className="text-2xl text-gray-600 mt-4">
        <span className="text-gray-800 uppercase font-bold">Notas</span>
        <p>{cliente.notas}</p>
      </p>
    </div>
  );
};

export default VerCliente;
