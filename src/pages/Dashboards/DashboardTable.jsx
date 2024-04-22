import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DashboardPanel from '../../components/DashboardPanel'
import Table from '../../components/Table'
import axios from 'axios'

export default function DashboardTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://44.221.150.52/medical/data', {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    }
                });

                const formattedData = response.data.data.map(item => {
                    // Convertir la fecha de UTC a la hora de México
                    const utcDate = new Date(item.date);
                    const mexicoDate = new Date(utcDate.toLocaleString("en-US", {timeZone: "America/Mexico_City"}));
                    
                    // Formatear la fecha
                    const formattedDate = `${mexicoDate.getDate()}-${mexicoDate.getMonth() + 1}-${mexicoDate.getFullYear()} - ${mexicoDate.getHours()}:${mexicoDate.getMinutes()}:${mexicoDate.getSeconds()}`;

                    return {
                        temperature: item.temperature,
                        heartRate: item.bpm,
                        aceleration: item.aceleration,
                        date: formattedDate,
                        status: item.status
                    };
                }).reverse(); // Cambiar el orden del array

                setData(formattedData);
            } catch (error) {
                console.error('Error al obtener los datos:', error)
            }
        }

        getData();
    }, []);

    return (
        <DashboardPanel>
            <div className="flex flex-col bg-[#222222] basis-3/4">
                <div className='flex mt-5 items-center justify-around gap-32'>
                    <div className='flex flex-row gap-10'>
                        <Link to="/dashboard" className='text-[#FFF] text-lg font-bold hover:duration-200 hover:scale-105 hover:border-b-[2px] hover:border-[#FFF] cursor-pointer'>My health</Link>
                        <Link to="/dashboard/table" className='text-[#FFF] text-lg font-bold hover:duration-200 hover:scale-105 hover:border-b-[2px] hover:border-[#FFF] cursor-pointer'>My activity</Link>
                    </div>
                    <div className='flex flex-row gap-3'>
                    <Link to="/dashboard/profile" className='bg-[#222222] text-[#FFF] text-center py-1.5 hover:duration-200 hover:scale-105 text-lg font-bold border-[1px] border-[#FFF] w-28 h-10 rounded-[30px]'>Profile</Link>
                        <Link to="/dashboard/users" className='bg-[#527566] text-center py-1.5 text-[#FFF] hover:duration-200 hover:scale-105 text-lg font-bold w-28 h-10 rounded-[30px]'>Admin</Link>
                    </div>
                </div>
                <main className='mx-32 mt-16'>
                    <Table data={data} />
                </main>
            </div>
        </DashboardPanel>
    )
}