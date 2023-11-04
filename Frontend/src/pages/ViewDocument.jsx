import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/imports/Footer";
const ViewDocument = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const dataString = localStorage.getItem("document");
  const data = JSON.parse(dataString);
  const indice = parseInt(searchParams.get("id"));
  const elemento = data[indice];

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] justify-center ">
      <div className="flex-grow mb-10">
        <section className="sm:py-16 py-6 flex justify-center flex-col w-screen border-t-black border-t-2 space-y-5">
          <div className="flex flex-col ml-80 space-y-10">
            <div className="">
              <h1>{elemento.titulo} </h1>
            </div>
            <div className="flex flex-col space-y-10">
              <div className="grid grid-flow-col grid-cols-2 grid-rows-5 ">
                <div className="">
                  <div className="font-bold font-custom_Syne text-2xl py-4 border-b-2 border-black w-4/6">
                    ID Documento
                  </div>
                  <div className="mt-5"> {elemento.id}</div>
                </div>
                <div className="">
                  <div className="font-bold font-custom_Syne text-2xl py-4 border-b-2 border-black w-4/6">
                    Tipo de documento
                  </div>
                  <div className="mt-5"> {elemento.tipo}</div>
                </div>
                <div className="">
                  <div className="font-bold font-custom_Syne text-2xl py-4 border-b-2 border-black w-4/6">
                    Materia
                  </div>
                  <div className="mt-5"> {elemento.materia}</div>
                </div>
                <div className="">
                  <div className="font-bold font-custom_Syne text-2xl py-4 border-b-2 border-black w-4/6">
                    Iniciativa
                  </div>
                  <div className="mt-5"> Nombre de iniciativa</div>
                </div>
                <div className="">
                  <div className="font-bold font-custom_Syne text-2xl py-4 border-b-2 border-black w-4/6">
                    Ámbito
                  </div>
                  <div className="mt-5"> Ambito - Dominio - Area</div>
                </div>
                <div className="">
                  <div className="font-bold font-custom_Syne text-2xl py-4 border-b-2 border-black w-4/6">
                    Fecha de publicación
                  </div>
                  <div className="mt-5"> {elemento.fecha_publicacion}</div>
                </div>
                <div className="">
                  <div className="font-bold font-custom_Syne text-2xl py-4 border-b-2 border-black w-4/6">
                    Fuente
                  </div>
                  <div className="mt-5"> {elemento.fuente}</div>
                </div>
                <div className="">
                  <div className="font-bold font-custom_Syne text-2xl py-4 border-b-2 border-black w-4/6">
                    Enlace
                  </div>
                  <div className="mt-5 ">
                    <a href={elemento.enlace} className="text-blue-600">
                      {" "}
                      Link documento{" "}
                    </a>{" "}
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

export default ViewDocument;
