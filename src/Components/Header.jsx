import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./style.css"

function Header() {
  const [open,setopen]=useState(false);
  const openclassName=()=>{
    open?setopen(false):setopen(true);
  }
  return (
    <>
   
<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-700 font-poppin ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
  <NavLink to="/" className="flex items-center">
      <img src="./img/wallet.png" className="h-8 mr-3" alt=""></img>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Crypto<span className='text-teal-500 '>Hub</span></span>
  </NavLink>
  <div className="flex md:order-2">
      <button type="button" className="text-white bg-teal-700
 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 max-[390px]:hidden"><a href='/exchanges'>Get Started</a></button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5 " onClick={()=>openclassName()} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className={`items-center justify-between   w-full md:flex md:w-auto md:order-1   ${open?'':'hidden'}`} id="navbar-sticky">
    <ul className="flex flex-col gap-1 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 text-md dark:border-gray-700">
      <li>
        <NavLink to={"/"}  className=" block py-2 pl-3 pr-4 text-white bg-teal-500 rounded md:bg-transparent md:text-white hover:text-teal-500 md:p-0 " aria-current="page">Home</NavLink>
      </li>
      <li>
        <NavLink to={"/exchanges"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-500 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Exchanges</NavLink>
      </li>
      <li>
        <NavLink to={"/coin"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-500 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Coin</NavLink>
      </li>
      
    </ul>
  </div>
  </div>
</nav>


    </>
  )
}

export default Header
