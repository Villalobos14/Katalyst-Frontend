import Logo from '../assets/Logo.svg'
import temp from '../assets/termometro.svg'

export default function DashboardPanel({ children }) {

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
                    <h2 className="text-[#FFFFFF] text-2xl font-light mt-6">Alejandro Villalobos</h2>
                    <h3 className="text-[#FFFFFF] text-lg font-light mt-3">Runner</h3>
                    <div className="flex justify-between w-[275px] mt-5">
                        <h2 className="text-[#FFF] text-2xl font-normal">Age</h2>
                        <h2 className="text-[#FFF] text-2xl font-normal">20</h2>
                    </div>
                    <div className="flex flex-col mt-5">
                        <div className="flex flex-row justify-between">
                            <h2 className="text-[#FFF] text-2xl font-normal">Height</h2>
                            <h2 className="text-[#FFF] text-2xl font-normal">180.0 cm</h2>
                        </div>
                        <hr className="w-[275px] h-[1px] bg-[#FFF] mt-3" />
                        <div className="flex flex-row justify-between mt-3">
                            <h2 className="text-[#FFF] text-2xl font-normal">Weight</h2>
                            <h2 className="text-[#FFF] text-2xl font-normal">65 kg</h2>
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
                        <button className='text-[#000] font-semibold text-2xl mt-8'>Log out</button>
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
                                <h2 className='text-base'>Regular checkups</h2>
                                <h2 className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur<br />
                                    adipiscing elit, sed do eiusmod tempor<br />
                                    incididunt ut labore et dolore magna aliqua.
                                    <br />Ut enim ad minim veniam, quis nostrud<br />
                                    exercitation ullamco laboris nisi ut aliquip ex</h2>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col pt-3'>
                        <h2 className='font-light text-xl text-[#000]'>Alert</h2>
                        <div className='flex flex-row'>
                            <div className='basis-1/4 flex flex-col justify-center items-center bg-[#2F483E]'>
                                <img className='w-20 h-20 m-[50px] ml-20 mr-20' src={temp} alt="temp" />
                            </div>
                            <div className='basis-3/4 bg-[#BEBEBE] flex flex-col justify-center p-6 pl-8 pr-8'>
                                <h2 className='text-base font-bold text-[#000] text-center'>Temperature</h2>
                                <h2 className='text-sm mt-2 text-center'>
                                    The <span className='font-bold text-[#000]'>temperature</span> has <br />
                                    <span className='font-bold text-[#000]'>exceeded</span> normal limits, you <br />
                                    need to <span className='font-bold text-[#000]'>cool down</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}