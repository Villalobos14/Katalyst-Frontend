import term2 from '../assets/termometro2.svg'
import elect from '../assets/elect.svg'
import correr from '../assets/correr1.svg'
import LineChart from '../pages/Graphics/LineChart'
import { Link } from 'react-router-dom'
import DashboardPanel from '../components/DashboardPanel'
import Alert from '../components/Alert'
import { useState, useEffect } from 'react'
import { io } from 'socket.io-client';

export default function Dashboard() {
    const token = JSON.parse(localStorage.getItem('token')) ?? JSON.parse(sessionStorage.getItem('token'));
    
    const [alertObject, setAlertObject] = useState({
        'isActive': false,
        'title': 'Temperature',
        'message': 'The temperature has exceeded normal limits, you need to cool down',
    });

    const [medData, setMedData] = useState({
        'temperature': '36.6',
        'heartRate': '110',
        'aceleration': '10',
    });

    const socket = io('184.72.246.90',{
        auth:{
            token: token
        },
        headers: {
            'access_token': token,
        }
    });


    useEffect(() => {
        console.log(token)
        socket.on('notification:medical', (data) => {
          console.log('notification:medical', data);
          if (data != null) {
            setMedData(prevMedData => ({
                ...prevMedData,
                'temperature': data.temperature.toFixed(2),
                'heartRate': data.BPM.toFixed(2),
                'aceleration': data.accelerationZ.toFixed(2),
            }));
            
            const temperature = parseFloat(data.temperature);
            if (temperature > 37) {
              setAlertObject({
                'isActive': true,
                'title': 'Temperature',
                'message': 'La temperatura ha excedido los límites normales, necesitas enfriarte o consultar a un médico',
              });
            } else if(temperature < 35) {
              setAlertObject({
                'isActive': true,
                'title': 'Temperature',
                'message': 'La temperatura presenta valores bajos, necesitas calentarte o consultar a un médico',
              });
            }
          }
        });
    
        // Cleanup function if needed
        return () => {
          socket.off('notification:medical');
        };
      }, [socket]);


    return (
        <DashboardPanel>
            <Alert isActive={alertObject.isActive} title={alertObject.title} message={alertObject.message}/>
            <main className="flex flex-col bg-[#222222] basis-3/4">
                <nav className='flex mt-5 items-center justify-around gap-32'>
                    <div className='flex flex-row gap-10'>
                        <Link to="/dashboard" className='text-[#FFF] text-lg font-bold hover:duration-200 hover:scale-105 hover:border-b-[2px] hover:border-[#FFF] cursor-pointer'>My health</Link>
                        <Link to="/dashboard/table" className='text-[#FFF] text-lg font-bold hover:duration-200 hover:scale-105 hover:border-b-[2px] hover:border-[#FFF] cursor-pointer'>My activity</Link>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <Link to="/dashboard/profile" className='bg-[#222222] text-[#FFF] text-center py-1.5 hover:duration-200 hover:scale-105 text-lg font-bold border-[1px] border-[#FFF] w-28 h-10 rounded-[30px]'>Profile</Link>
                        <Link to="/dashboard/users" className='bg-[#527566] text-center py-1.5 text-[#FFF] hover:duration-200 hover:scale-105 text-lg font-bold w-28 h-10 rounded-[30px]'>Admin</Link>
                    </div>
                </nav>
                <div className='min-w-screen'>
                    <div className='flex flex-col w-full'>
                        <div className='w-full flex justify-center items-center'>
                            <div className='flex gap-56 mt-20'>
                                <div className='flex flex-col'>
                                    <h2 className='font-bold text-xl text-[#FFF]'>Temperature</h2>
                                    <div className='flex'>
                                        <img src={term2} alt="Temperatura" />
                                        <h2 className='text-[#FFF] font-normal text-6xl'>{medData.temperature} °</h2>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <h2 className='font-bold text-xl text-[#FFF]'>Heart Rate</h2>
                                    <div className='flex row'>
                                        <img src={elect} alt="Electrocardiograma" />
                                        <h2 className='text-[#FFF] font-normal text-6xl'>{medData.heartRate} <span className='text-sm text-[#FFF] font-light'>BPM</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <div className='flex gap-36 mt-10'>
                                <div className='flex flex-col justify-end pb-5'>
                                    <h2 className='font-bold text-xl text-[#FFF]'>Aceleration</h2>
                                    <div className='flex'>
                                        <img src={correr} alt="Correr" />
                                        <h2 className='text-[#FFF] font-normal text-6xl'>{medData.aceleration} <span className='text-sm text-[#FFF] font-light'>Km/h</span></h2>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='mt-12'>
                                        <LineChart rtData={medData} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </DashboardPanel>
    )
}