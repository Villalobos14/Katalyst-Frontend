import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <div className='bg-[url("/background.png")] bg-cover'>
      <nav
        className='flex justify-around pt-6'
      >
        <div>
          <img
            className='w-auto h-9'
            src="/logo.png" alt="" />
        </div>
        <div>
          <ul className='flex justify-between gap-x-4 text-[#FFFFFF]'>
            <li className='hover:text-[#ffffffb4]  cursor-pointer duration-300 hover:border-b-2 border-[#ffffffb4]'>Inicio</li>
            <li className='hover:text-[#ffffffb4]  cursor-pointer duration-300 hover:border-b-2 border-[#ffffffb4]'>Nosotros</li>
            <li className='hover:text-[#ffffffb4]  cursor-pointer duration-300 hover:border-b-2 border-[#ffffffb4]'>Sistema</li>
          </ul>
        </div>
        <div className='flex justify-end text-[#FFFFFF] gap-x-5 rounded-2xl border-[#ffffffb4]'>
          <div className='border-[#ffffffb4]'>
            <Link className='bg-black py-1.5 px-4 rounded-2xl'
              to="/start">
              Comenzar
            </Link>
          </div>
          <div>
            <Link
              to="/register">
              Registrarme
            </Link>
          </div>
        </div>
      </nav>
      <div className='w-full h-screen flex justify-start mx-32 mt-24'>
        <div className='max-w-lg'>
          <div className='text-white text-6xl'>
            <span className='font-bold'>Innovación</span>
            <h3 className='font-light'>para la salud</h3>
          </div>
          <p className='my-6 text-white'>Nos basamos en la cercania que pondemos tener con tu salud y los medicos sin neceesidad de tener que ir a ninguna locacion a la alcance de tu mano, para tu comodidad y tu satisfaccion.</p>
          <div className='flex items-center gap-x-1 bg-[#2F483E] rounded-2xl max-w-36'>
            <Link to="/about" className=' text-white px-1 py-2.5 ml-6'>
              Saber más
            </Link>
            <ChevronRightIcon className='w-auto h-4 text-white mr-1' />
          </div>
        </div>
      </div>
    </div>
  )
}
