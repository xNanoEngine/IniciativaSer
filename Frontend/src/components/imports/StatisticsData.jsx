import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import clientAxios from "../config/clienteAxios";



const StatisticsData = () => {
    //WIP
    const [data1, setData1] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Buscando....")
                const response = await clientAxios.get(`/data`);
                console.log("Recibido!")

                const responseData1 = response.data.data1
                const transformedData = Array.isArray(responseData1) ? responseData1 : [];
                setData1(transformedData)
                
            } catch (error) {
            console.error("Error al obtener estadisticas");
            }
        };
        fetchData();
        }, []);


    const chartData = {
        labels: data1.map(item => item.nombre), // Suponiendo que tus datos tienen una propiedad 'nombre'
        datasets: [{
            label: 'Datos desde el backend',
            data: data1.map(item => item.cantidad), // Suponiendo que tus datos tienen una propiedad 'cantidad'
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }],
    };

    const chartOptions = {
        scales: {
            x: {
            type: 'category', // Asegúrate de que el tipo de escala sea 'category'
            },
            y: {
            beginAtZero: true,
            },
        },
    };

    return (
        <div>
            {data1.length > 0 ? (
                <Bar data={chartData} options={chartOptions} />
            ) : (
                <p>Cargando datos...</p>
            )}
        </div>
    );
};

export default StatisticsData;