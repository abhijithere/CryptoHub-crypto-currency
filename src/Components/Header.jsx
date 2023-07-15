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
   
<nav className=" bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-700 font-poppin ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
  <NavLink to="/" className="flex items-center">
      <img src="./img/wallet.png" className="h-8 mr-3" alt=""></img>
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Crypto<span className='text-teal-500 '>Hub</span></span>
  </NavLink>
  <div className="flex md:order-2">
      <button type="button" className="text-white
  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-teal-600 hover:bg-teal-700 focus:ring-teal-800 max-[390px]:hidden"><a href='/exchanges'>Get Started</a></button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5 " onClick={()=>openclassName()} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className={`items-center justify-between   w-full md:flex md:w-auto md:order-1   ${open?'':'hidden'}`} id="navbar-sticky">
    <ul className="flex flex-col gap-1 p-4 md:p-0 mt-4 font-medium border b rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 text-md border-gray-700">
      <li>
        <NavLink to={"/"}  className=" block py-2 pl-3 pr-4 text-white bg-teal-500 rounded md:bg-transparent md:text-white hover:text-teal-500 md:p-0 " aria-current="page">Home</NavLink>
      </li>
      <li>
        <NavLink to={"/exchanges"} className="block py-2 pl-3 pr-4  rounded  md:hover:bg-transparent  md:p-0 md:hover:text-teal-500 text-white hover:bg-gray-700 hover:text-white border-gray-700">Exchanges</NavLink>
      </li>
      <li>
        <NavLink to={"/coin"} className="block py-2 pl-3 pr-4  rounded    md:p-0 md:hover:text-teal-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Coin</NavLink>
      </li>
      
    </ul>
  </div>
  </div>
</nav>


    </>
  )
}

export default Header
