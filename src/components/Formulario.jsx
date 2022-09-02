import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alerta from "./Alerta";

const Formulario = () => {
  const handleSubmit = (valores) => {};
  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(3, "El Nombre es muy corto")
      .max(20, "Nombre muy largo")
      .required("El nombre del cliente es obligatorio"),
    /*   empresa: "",
    email: "",
    telefono: "",
    notas: "", */
  });
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Agregar Cliente
      </h1>
      <Formik
        initialValues={{
          nombre: "",
          empresa: "",
          email: "",
          telefono: "",
          notas: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={nuevoClienteSchema}
      >
        {(errors) => (
          <Form className="mt-10 ">
            <div className="mb-4">
              <label className="text-gray-800 " htmlFor="nombre">
                Nombre:
              </label>
              <Field
                type="text"
                id="nombre"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Nombre del cliente"
                name="nombre"
              />
              {errors.nombre && touched.nombre ? (
                <Alerta>{errors.nombre}</Alerta>
              ) : null}
            </div>

            <div className="mb-4">
              <label className="text-gray-800 " htmlFor="empresa">
                Empresa:
              </label>
              <Field
                type="text"
                id="empresa"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Empresa Cliente"
                name="empresa"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800 " htmlFor="email">
                Email:
              </label>
              <Field
                type="email"
                id="email"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Email Cliente"
                name="email"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800 " htmlFor="telefono">
                Teléfono:
              </label>
              <Field
                type="tel"
                id="telefono"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Telefono del Cliente"
                name="telefono"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800 " htmlFor="notas">
                Notas:
              </label>
              <Field
                as="textarea"
                type="tel"
                id="notas"
                className="mt-2 block w-full p-3 bg-gray-50 h-40"
                placeholder="Notas del Cliente"
                name="notas"
              />
            </div>
            <input
              type="submit"
              value={"Agregar Cliente"}
              className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formulario;
