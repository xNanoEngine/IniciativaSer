import React from "react";
import Footer from "../components/imports/Footer";
import InitiativeForm from "../components/imports/InitiativeForm";

const Initiative = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="sm:py-16 py-6 flex flex-col border-t-black border-t-2">
          <div className="flex flex-col mx-10 md:mx-60 md:my-5 ">
            <h1 className="ml-4">Registrar información</h1>
            <InitiativeForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Initiative;
