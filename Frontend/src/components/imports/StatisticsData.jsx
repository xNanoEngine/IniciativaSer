import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import clientAxios from "../config/clienteAxios";


const StatisticsData = () => {
    //WIP
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Buscando....")
                const response = await clientAxios.get(`/data`);
                console.log("Recibido!")
                console.log(response.data)
                const responseData1 = response.data.data1
                const transformedData1 = Array.isArray(responseData1) ? responseData1 : [];
                setData1(transformedData1)

                const responseData2 = response.data.data2
                const transformedData2 = Array.isArray(responseData2) ? responseData2 : [];
                setData2(transformedData2)
                
                const responseData3 = response.data.data3
                const transformedData3 = Array.isArray(responseData3) ? responseData3 : [];
                setData3(transformedData3)

            } catch (error) {
            console.error("Error al obtener estadisticas");
            }
        };
        fetchData();
        }, []);


    const chartData1 = {
        labels: data1.map(item => item.nombre), // Suponiendo que tus datos tienen una propiedad 'nombre'
        datasets: [{
            label: 'Cantidad de iniciativas',
            data: data1.map(item => item.cantidad), // Suponiendo que tus datos tienen una propiedad 'cantidad'
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }],
    };

    const chartData2 = {
        labels: data2.map(item => item.nombre), // Suponiendo que tus datos tienen una propiedad 'nombre'
        datasets: [{
            label: 'Cantidad de iniciativas',
            data: data2.map(item => item.cantidad), // Suponiendo que tus datos tienen una propiedad 'cantidad'
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }],
    };

    const chartData3 = {
        labels: data3.map(item => item.nombre), // Suponiendo que tus datos tienen una propiedad 'nombre'
        datasets: [{
            label: 'Cantidad de iniciativas',
            data: data3.map(item => item.cantidad), // Suponiendo que tus datos tienen una propiedad 'cantidad'
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
            <h2>Cantidad de iniciativas por programa</h2>
            {data1.length > 0 ? (
            <Bar data={chartData1} options={chartOptions} />
            ) : (
            <p>Cargando datos...</p>
            )}
            <h2>Cantidad de iniciativas por comuna</h2>
            {data2.length > 0 ? (
            <Bar data={chartData2} options={chartOptions} />
            ) : (
            <p>Cargando datos...</p>
            )}
            <h2>Cantidad de iniciativas por ambito</h2>
            {data3.length > 0 ? (
            <Bar data={chartData3} options={chartOptions} />
            ) : (
            <p>Cargando datos...</p>
            )}
        </div>
    );
};

export default StatisticsData;