import { useEffect, useState } from 'react';
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

export default function LineChart({ rtData }) {
    const [sensores, setSensores] = useState({
        temperature: 0,
        bpm: 0,
        aceleration: 0
    });

    useEffect(() => {
        setSensores({
            temperature: rtData.temperature,
            bpm: rtData.heartRate,
            aceleration: rtData.aceleration
        });
    }, [rtData]);

    const [time, setHours] = useState([]);
    const [bpm, setBpm] = useState([]);
    const [aceleration, setAceleration] = useState([]);
    const [temperature, setTemperature] = useState([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newHour = new Date().toLocaleTimeString();
            setHours(prevTime => [...prevTime, newHour]);
            setBpm(prevBpm => [...prevBpm, sensores.bpm]);
            setAceleration(prevAceleration => [...prevAceleration, sensores.aceleration]);
            setTemperature(prevTemperature => [...prevTemperature, sensores.temperature]);

            if (time.length >= 7) {
                setHours(prevTime => prevTime.slice(1));
                setBpm(prevBpm => prevBpm.slice(1));
                setAceleration(prevAceleration => prevAceleration.slice(1));
                setTemperature(prevTemperature => prevTemperature.slice(1));
            }
        }, 3000);

        return () => clearInterval(intervalId);
    }, [sensores]);

    const data = {
        labels: time,
        datasets: [
            {
                label: 'Aceleración',
                data: aceleration,
                borderColor: '#fff',
                backgroundColor: 'rgb(36 48 38)',
            },
            {
                label: 'BPM',
                data: bpm,
                borderColor: '#fff',
                backgroundColor: '#527566',
            },
            {
                label: 'Temperatura',
                data: temperature,
                borderColor: '#fff',
                backgroundColor: '#034f2f',
            }
        ]
    };

    return <Line options={options} data={data} />
}
