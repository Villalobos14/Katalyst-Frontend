import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg'
import temp from '../assets/termometro.svg'
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function DashboardPanel({ children }) {
    const handleLogout = async () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
    }

    const [profile, setProfile] = useState({
        name: '',
        lastName: '',
        age: '',
        height: '',
        weight: '',
        activity: '',
    });

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token')) ?? JSON.parse(sessionStorage.getItem('token'));
        
        const getProfile = async () => { 
            const response = await axios.get("http://34.197.57.0/users/profile", {
                headers: {
                    'Authorization': token,
                },
            });

            const responseDataUser = response.data.data.user

            console.log('data:', response.data.data.user);

            setProfile({
                name: responseDataUser.name,
                lastName: responseDataUser.lastname,
                age: responseDataUser.age,
                height: responseDataUser.height,
                weight: responseDataUser.weight,
                activity: responseDataUser.activity,
            });
        }

        getProfile();
    }, [])

    const currentDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const currentMonth = monthNames[currentDate.getMonth()];
    const currentDay = currentDate.getDate();
    return (
        <div className="flex flex-col w-full h-screen bg-[#CFCFCF]">
            <div className="flex flex-row">
                <div className="flex flex-col items-center justify-start bg-[#243026] basis-1/4 pb-14">
                    <img src={Logo} alt="Logo-Dashboard" className='mt-5' />
                    <div className="rounded-full bg-white w-40 h-40 mt-10">
                        <img
                            className='object-cover rounded-full object-center'
                            src="https://scontent.ftgz2-1.fna.fbcdn.net/v/t39.30808-6/366681108_2263897647140696_7729772342306175147_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gWDzdQVVKUwAb4cnMM6&_nc_ht=scontent.ftgz2-1.fna&oh=00_AfC-xlL2T3a-2mdClPCqk_UtyHZRVmOZ-stAMlirEuD_dQ&oe=66266EB4"
                            alt="profile-photo" />
                    </div>
                    <h2 className="text-[#FFFFFF] text-2xl font-light mt-6">{`${profile.name} ${profile.lastName}`}</h2>
                    <h3 className="text-[#FFFFFF] text-lg font-light mt-3">{profile.activity}</h3>
                    <div className="flex justify-between w-[275px] mt-5">
                        <h2 className="text-[#FFF] text-2xl font-normal">Age</h2>
                        <h2 className="text-[#FFF] text-2xl font-normal">{profile.age}</h2>
                    </div>
                    <div className="flex flex-col mt-5">
                        <div className="flex flex-row justify-between">
                            <h2 className="text-[#FFF] text-2xl font-normal">Height</h2>
                            <h2 className="text-[#FFF] text-2xl font-normal">{`${profile.height} cm`}</h2>
                        </div>
                        <hr className="w-[275px] h-[1px] bg-[#FFF] mt-3" />
                        <div className="flex flex-row justify-between mt-3">
                            <h2 className="text-[#FFF] text-2xl font-normal">Weight</h2>
                            <h2 className="text-[#FFF] text-2xl font-normal">{`${profile.weight} kg`}</h2>
                        </div>
                        <hr className="w-[275px] h-[1px] bg-[#FFF] mt-3" />
                    </div>
                </div>
                {children}
            </div>
            <footer className='flex flex-row bg-[#CFCFCF]'>
                <div className='flex flex-col items-center basis-1/4'>
                    <div className='flex flex-col items-start'>
                        <h2 className='text-[#000] text-xl mt-4 font-light'>Doctors</h2>
                        <hr className='w-[206px] bg-[#000] h-[2px] mt-2' />
                        <h2 className='leading-4 font-light mt-4'><span className='text-2xl'>Doctor James Harden </span> <br /> <span>Medical Center</span></h2>
                        <Link to="/" onClick={handleLogout} className='text-[#000] font-semibold text-2xl mt-8'>Log out</Link>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center basis-3/4'>
                    <div className='flex flex-col pt-3'>
                        <h2 className='font-light text-xl text-[#000]'>Medical Cards</h2>
                        <div className='flex flex-row'>
                            <div className='basis-1/4 flex flex-col justify-center items-center bg-[#2F483E] p-10 pl-12 pr-12'>
                                <h2 className='text-[#FFF] text-base'>{currentMonth}</h2>
                                <h2 className='text-[#FFF] text-6xl'>{currentDay}</h2>
                            </div>
                            <div className='basis-3/4 bg-[#BEBEBE] flex flex-col justify-center p-6 pl-8 pr-8'>
                                <h2 className='text-base text-[#000] font-bold'>Controla tu ritmo cardíaco regularmente</h2>
                                <div className='max-w-xs'>
                                    <h2 className='text-sm mt-2'>Mantener un registro de tu ritmo cardíaco puede ayudarte a detectar irregularidades tempranas y a tomar medidas preventivas si es necesario. Consulta a tu médico si notas cambios significativos en tu ritmo cardíaco.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col pt-3'>
                        <h2 className='font-light text-xl text-[#000]'>Alert</h2>
                        <div className='flex flex-row'>
                            <div className='basis-1/4 flex flex-col justify-center items-center bg-[#2F483E]'>
                                <img className='w-20 h-20 m-[50px] ml-20 mr-20' src={temp} alt="temp" />
                            </div>
                            <div className='basis-3/4 bg-[#BEBEBE] flex flex-col justify-start p-6 pl-8'>
                                <h2 className='text-base font-bold text-[#000] text-start'>No ignores los síntomas</h2>
                                <div className='max-w-[14rem]'>
                                    <h2 className='text-sm mt-2'>
                                        Si experimentas síntomas como palpitaciones, busca atención médica de inmediato. No ignores estos signos de advertencia, ya que podrían indicar un problema.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}