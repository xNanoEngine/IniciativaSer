import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/imports/Footer";
const ViewInitiative = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const dataString = localStorage.getItem("data");
  const data = JSON.parse(dataString);
  const indice = parseInt(searchParams.get("id"));
  const elemento = data[indice];

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] justify-center ">
      <div className="flex-grow mb-10">
        <section className="sm:py-16 py-6 flex justify-center flex-col w-screen border-t-black border-t-2 space-y-5">
          <div className="flex flex-col ml-80 space-y-10">
            <div className="">
              <h1>{elemento.nombre} </h1>
            </div>
            <div className="flex flex-col space-y-10">
              <div className="">
                <div className="font-bold font-custom_Syne text-2xl py-4 border-b-2 border-black w-2/6">
                  Descripcion
                </div>
                <div className="mt-5"> {elemento.descripcion}</div>
              </div>
              <div className="grid grid-flow-col grid-cols-2 grid-rows-3 ">
                <div className="">
                  <div className="font-bold font-custom_Syne text-2xl py-4 border-b-2 border-black w-4/6">
                    Programa
                  </div>
                  <div className="mt-5">
                  {elemento.programas.map((program) => (
                    <div>
                      {program.nombre}
                    </div>
                  ))}
                  </div>
                </div>
                <div className="">
                  <div className="font-bold font-custom_Syne text-2xl py-4 border-b-2 border-black w-4/6">
                    ID de la iniciativa
                  </div>
                  <div className="mt-5"> {elemento.id}</div>
                </div>
                <div className="">
                  <div className="font-bold font-custom_Syne text-2xl py-4 border-b-2 border-black w-4/6">
                    Componente
                  </div>
                  <div className="mt-5"> {elemento.componente}</div>
                </div>
                <div className="">
                  <div className="font-bold font-custom_Syne text-2xl py-4 border-b-2 border-black w-4/6">
                    Tipo de iniciativa
                  </div>
                  <div className="mt-5"> {elemento.tipo}</div>
                </div>
                <div className="">
                  <div className="font-bold font-custom_Syne text-2xl py-4 border-b-2 border-black w-4/6">
                    Financiamiento
                  </div>
                  <div className="mt-5"> {elemento.formaFinanciamiento}</div>
                </div>
                <div className="">
                  <div className="font-bold font-custom_Syne text-2xl py-4 border-b-2 border-black w-4/6">
                    Documentos
                  </div>
                  <div className="mt-5">
                    {elemento.documentos.map((docs) => (
                      <div>
                      <a href={docs.enlace}
                        className="text-blue-500"
                      > {docs.titulo}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ViewInitiative;
