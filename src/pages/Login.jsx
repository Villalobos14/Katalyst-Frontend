import React from 'react'
//import { Link } from 'react-router-dom'

export function Login2() {
  return (
    <div className=' w-11/12  max-w-[700px] px-10 py-20 rounded-3xl bg-white justify-end '>
            <h1 className='text-5xl font-semibold'>Bienvenido de vuelta</h1>
            <p className='font-medium text-lg text-black mt-4'>Entra para ver toda la informacion que tenemos para ti.</p>
            <div className='mt-8'>
                <div className='flex flex-col'>
                    <label className='text-lg font-medium'>Email</label>
                    <input 
                        className='w-full  rounded-xl p-4 mt-1 bg-[#D9D9D9]'
                        placeholder="Enter your email"/>
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='text-lg font-medium'>Password</label>
                    <input 
                        className='w-full   rounded-xl p-4 mt-1 bg-[#D9D9D9]'
                        placeholder="Enter your email"
                        type={"password"}
                    />
                </div>
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input  type="checkbox" id='remember'/>
                        <label className='ml-2 font-medium text-base' for="remember">Recuerdame</label>
                    </div>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-[#4F8770] rounded-xl text-white font-bold text-lg'>Sign in</button>
                    
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>No tienes una cuenta?</p>
                    <button 
                        onClick={() => setAuthState('register')}
                        className='ml-2 font-medium text-base text-[#4F8770]'>Registrate</button>
                </div>
            </div>
        </div>
    )
  }
