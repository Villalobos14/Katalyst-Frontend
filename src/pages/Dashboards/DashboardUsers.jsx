import { Link } from 'react-router-dom'
import DashboardPanel from '../../components/DashboardPanel'
import UserTable from '../../components/UserTable'

export default function DashboardUsers() {
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
                    <UserTable />
                </main>
            </div>
        </DashboardPanel>

    )
}