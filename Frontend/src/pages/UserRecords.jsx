import React, { useState } from "react";
import Footer from "../components/imports/Footer";
import TablesRecord from "../components/imports/TablesRecord";
const UserRecords = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="sm:py-16 py-6 flex flex-col ">
          <div className="flex flex-col mx-10 md:mx-60 md:my-5 ">
            <h1 className="ml-4">Mis registros</h1>{" "}
            <div className="ml-4"> Mostrando resultados..</div>
            <TablesRecord
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserRecords;
