import React from 'react'
import Logo from '../assets/rope.svg'
import { useMatches } from 'react-router-dom'

const NavBar = () => {
    const match = useMatches()[1]?.pathname?.split('/')[2].toUpperCase()
    console.log(match)
  return (
  
    

<nav className="">
  <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto px-4">
  <a href="/" className="flex items-center sm:space-x-2 rtl:space-x-reverse">
      <img src={Logo} className="object-fill block h-28 " alt="Flowbite Logo" />
      <span className="self-center text-3xl font-bold whitespace-nowrap text-white">{match ? match : 'CREDITS'}</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="text-[#112444] bg-white border-2  hover:border-white hover:bg-transparent hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-2 sm:px-4 py-3 text-center ">Check Out the Code</button>
     {/*  <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button> */}
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
  </div>
  </div>
</nav>

  )
}

export default NavBar
