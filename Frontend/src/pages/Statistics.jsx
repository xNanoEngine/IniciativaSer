import React, { useState } from "react";
import Footer from "../components/imports/Footer";
import StatisticsData from "../components/imports/StatisticsData";

const Statistics = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <div className="sm:py-16 py-6 flex flex-col ">
                    <div className="flex flex-col mx-10 md:mx-60 md:my-5 ">
                    <h1 className="ml-4">Estadisticas</h1>
                        <StatisticsData />
                    </div>
                </div>
            </div>
        <Footer />
    </div>
    );
};

export default Statistics;
