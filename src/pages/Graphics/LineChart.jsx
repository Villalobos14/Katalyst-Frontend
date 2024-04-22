import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'left',
        },
    },
};



export default function LineChart( {rtData} ) {

    const [sensores, setSensores] = useState({
        temperature:0,
        bpm:0,
        aceleration:0
    });

    useEffect(() => {
        setSensores({
            temperature: rtData.temperature,
            bpm: rtData.bpm,
            aceleration: rtData.aceleration
        });
    }, [rtData]);

    const [time, setHours] = useState([]);
    const [bpm, setBpm] = useState([]);
    const [aceleration, setAceleration] = useState([]);
    const [temperature, setTemperature] = useState([]);

    const data = {
        labels: time,
        datasets: [
            {
                label: 'Aceleración',
                data: sensores.aceleration,
                borderColor: '#fff',
                backgroundColor: '#fff',
            },
            {
                label: 'BPM',
                data: sensores.bpm,
                borderColor: '#fff',
                backgroundColor: '#fff',
            },
            {
                label: 'Temperatura',
                data: sensores.temperature,
                borderColor: '#fff',
                backgroundColor: '#fff',
            }
        ]
    };



    useEffect(() => {
        const intervalId = setInterval(() => {
            const newHour = new Date().toLocaleTimeString();
            const newAceleration = [...sensores.aceleration];
            const newBpm = [...sensores.bpm];
            const newTemperature = [...sensores.temperature];
            // Si el tamaño del sensor es mayor o igual a 7, eliminamos el primer dato (cola)
            if (newBpm.length >= 7) {
                newBpm.shift();
                newAceleration.shift();
                newTemperature.shift();
                time.shift();
            }
            // Agregamos el nuevo dato al final del arreglo
            newBpm.push(sensores.bpm);
            setBpm(newBpm);

            newAceleration.push(sensores.aceleration);
            setAceleration(newAceleration);

            newTemperature.push(sensores.temperature);
            setTemperature(newTemperature);

            time.push(newHour);
            setHours(time);
        }, 1000);

        // Limpieza del intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, [rtData]);


    return <Line options={options} data={data} />
}