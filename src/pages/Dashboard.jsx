import Logo from '../assets/Logo.svg'
import temp from '../assets/termometro.svg'
import term2 from '../assets/termometro2.svg'
import elect from '../assets/elect.svg'
import correr from '../assets/correr1.svg'
import LineChart from '../pages/Graphics/LineChart'
import { Link } from 'react-router-dom'
import DashboardPanel from '../components/DashboardPanel'

export default function Dashboard() {
    return (
        <DashboardPanel>
            <main className="flex flex-col bg-[#222222] basis-3/4">
                <nav className='flex mt-5 items-center justify-around gap-32'>
                    <div className='flex flex-row gap-10'>
                        <Link to="/dashboard" className='text-[#FFF] text-lg font-bold hover:duration-200 hover:scale-105 hover:border-b-[2px] hover:border-[#FFF] cursor-pointer'>My health</Link>
                        <Link to="/dashboard/table" className='text-[#FFF] text-lg font-bold hover:duration-200 hover:scale-105 hover:border-b-[2px] hover:border-[#FFF] cursor-pointer'>My activity</Link>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <button className='bg-[#222222] text-[#FFF] hover:duration-200 hover:scale-105 text-lg font-bold border-[1px] border-[#FFF] w-28 h-10 rounded-[30px]'>Profile</button>
                        <button className='bg-[#527566] text-[#FFF] hover:duration-200 hover:scale-105 text-lg font-bold w-28 h-10 rounded-[30px]'>Admin</button>
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
                                        <h2 className='text-[#FFF] font-normal text-6xl'>36.6 °</h2>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <h2 className='font-bold text-xl text-[#FFF]'>Heart Rate</h2>
                                    <div className='flex row'>
                                        <img src={elect} alt="Electrocardiograma" />
                                        <h2 className='text-[#FFF] font-normal text-6xl'>110 <span className='text-sm text-[#FFF] font-light'>BPM</span></h2>
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
                                        <h2 className='text-[#FFF] font-normal text-6xl'>10 <span className='text-sm text-[#FFF] font-light'>Km/h</span></h2>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='mt-12'>
                                        <LineChart />
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