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



export default function LineChart() {

    const [sensores, setSensores] = useState({
        co: 0,
        gas: 0,
        humidity: 0,
        temperature: 0,
        light: 0,
    })

    useEffect(() => {
        setSensores({
            co: 23,
            gas: 5,
            humidity: 86,
            temperature: 43,
            light: 15,
        });
    }, [])

    const [co, setCo] = useState([]);
    const [gas, setGas] = useState([]);
    const [temperature, setTemperature] = useState([]);
    const [light, setLight] = useState([]);
    const [time, setHours] = useState([]);
    const [humidity, setHumidity] = useState([]);


    const data = {
        labels: time,
        datasets: [
            {
                label: 'Calidad del aire',
                data: co,
                borderColor: '#fff',
                backgroundColor: '#fff',
            },
            {
                label: 'Gas',
                data: gas,
                borderColor: '#fff',
                backgroundColor: '#fff',
            },
            {
                label: 'Temperatura',
                data: temperature,
                borderColor: '#fff',
                backgroundColor: '#fff',
            },
            {
                label: 'Luz',
                data: light,
                borderColor: '#fff',
                backgroundColor: '#fff',
            },
            {
                label: 'Humedad',
                data: humidity,
                borderColor: '#fff',
                backgroundColor: '#fff',
            }
        ]
    };



    useEffect(() => {
        const intervalId = setInterval(() => {
            const newHour = new Date().toLocaleTimeString();
            const newCo = [...co];
            const newGas = [...gas];
            const newTemperature = [...temperature];
            const newLight = [...light];
            const newHumidity = [...humidity];
            // Si el tamaño del sensor es mayor o igual a 7, eliminamos el primer dato (cola)
            if (newCo.length >= 7) {
                newCo.shift();
                newGas.shift();
                newTemperature.shift();
                newLight.shift();
                newHumidity.shift();
                time.shift();
            }
            // Agregamos el nuevo dato al final del arreglo
            newCo.push(sensores.co);
            setCo(newCo);

            newGas.push(sensores.gas);
            setGas(newGas);

            newTemperature.push(sensores.temperature);
            setTemperature(newTemperature);

            newLight.push(sensores.light);
            setLight(newLight);

            newHumidity.push(sensores.humidity);
            setHumidity(newHumidity);

            time.push(newHour);
            setHours(time);
        }, 1000);

        // Limpieza del intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, [co, gas, temperature, light]);


    return <Line options={options} data={data} />
}