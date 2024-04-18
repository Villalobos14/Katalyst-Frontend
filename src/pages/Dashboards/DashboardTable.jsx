import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import temp from '../../assets/termometro.svg'
import DashboardPanel from '../../components/DashboardPanel'
import Table from '../../components/Table'

export default function DashboardTable() {
    return (
        <DashboardPanel>
            <div className="flex flex-col bg-[#222222] basis-3/4">
                <div className='flex mt-5 items-center justify-around gap-32'>
                    <div className='flex flex-row gap-10'>
                        <Link to="/dashboard" className='text-[#FFF] text-lg font-bold hover:duration-200 hover:scale-105 hover:border-b-[2px] hover:border-[#FFF] cursor-pointer'>My health</Link>
                        <Link to="/dashboard/table" className='text-[#FFF] text-lg font-bold hover:duration-200 hover:scale-105 hover:border-b-[2px] hover:border-[#FFF] cursor-pointer'>My activity</Link>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <button className='bg-[#222222] text-[#FFF] hover:duration-200 hover:scale-105 text-lg font-bold border-[1px] border-[#FFF] w-28 h-10 rounded-[30px]'>Profile</button>
                        <button className='bg-[#527566] text-[#FFF] hover:duration-200 hover:scale-105 text-lg font-bold w-28 h-10 rounded-[30px]'>Admin</button>
                    </div>
                </div>
                <main className='mx-32 mt-16'>
                    <Table />
                </main>
            </div>
        </DashboardPanel>
    )
}