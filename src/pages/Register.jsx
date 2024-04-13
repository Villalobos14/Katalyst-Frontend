import React from 'react'
import Logo from '../assets/Logo.svg'
import Side from '../assets/david-schultz-R52uFXuPdlE-unsplash 1.png'
export default function Register() {
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet={Side}
            className="grow w-full aspect-[0.77] max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start px-20 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet={Logo}
              className="max-w-full aspect-[3.85] w-[141px] max-md:ml-1.5"
            />
            <div className="mt-9 ml-4 text-3xl font-bold text-center text-black max-md:ml-2.5">
              Create an account
            </div>
            <div className="mt-6 ml-5 text-sm font-bold text-center text-black max-md:ml-2.5">
              Regístrate para conocer los beneficios de la aplicación
            </div>
            <div className="self-stretch mt-7 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-sm font-bold text-center text-black max-md:mt-10">
                    <div>Name</div>
                    <div className="justify-center items-start px-6 py-5 mt-3 rounded-xl border border-solid bg-zinc-300 border-stone-400 border-opacity-0 text-neutral-500 max-md:px-5">
                      enter your Name
                    </div>
                    <div className="mt-5">Lastname</div>
                    <div className="justify-center items-start px-6 py-5 mt-2.5 rounded-xl border border-solid bg-zinc-300 border-stone-400 border-opacity-0 text-neutral-500 max-md:px-5">
                      enter your Lastname
                    </div>
                    <div className="mt-4">Email</div>
                    <div className="justify-center items-start px-7 py-5 mt-2.5 rounded-xl border border-solid bg-zinc-300 border-stone-400 border-opacity-0 text-neutral-500 max-md:px-5">
                      enter your Email
                    </div>
                    <div className="mt-6">Password</div>
                    <div className="justify-center items-start px-6 py-5 mt-2 rounded-xl border border-solid bg-zinc-300 border-stone-400 border-opacity-0 text-neutral-500 max-md:px-5">
                      enter your password
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-sm font-bold text-center text-black max-md:mt-10">
                    <div>Actividad</div>
                    <div className="justify-center items-start px-3.5 py-5 mt-3 rounded-xl border border-solid bg-zinc-300 border-stone-400 border-opacity-0 text-neutral-500 max-md:pr-5">
                      Enter your Sport/Activity
                    </div>
                    <div className="mt-5">Frecuency</div>
                    <div className="justify-center items-start px-3.5 py-5 mt-2 rounded-xl border border-solid bg-zinc-300 border-stone-400 border-opacity-0 text-neutral-500 max-md:pr-5">
                      Enter the frecuency
                    </div>
                    <div className="mt-4">Edad</div>
                    <div className="justify-center items-start px-3 py-5 mt-2.5 rounded-xl border border-solid bg-zinc-300 border-stone-400 border-opacity-0 text-neutral-500 max-md:pr-5">
                      20 years
                    </div>
                    <div className="mt-6">Edad</div>
                    <div className="justify-center items-start px-3.5 py-5 mt-3 rounded-xl border border-solid bg-zinc-300 border-stone-400 border-opacity-0 text-neutral-500 max-md:pr-5">
                      20 kg
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-6 ml-5 text-sm font-bold text-center text-black max-md:ml-2.5">
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 aspect-square w-[29px]"
              />
              <div className="my-auto">Remember me</div>
            </div>
            <div className="justify-center items-center px-16 py-5 mt-6 max-w-full text-sm font-bold text-center text-white whitespace-nowrap bg-gray-500 rounded-xl border border-solid border-green-400 border-opacity-0 w-[300px] max-md:px-5 max-md:ml-1.5">
              Register
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

