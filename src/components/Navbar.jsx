import React, { useState } from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

  const [nav,setNav] = useState(false)

  const handelNav = () =>{  
    setNav(!nav)
  } 

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className='text-3xl w-full font-bold text-[#00df9a]'>Hi mayank</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handelNav}  className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20} className='hover:cursor-pointer'/> : <AiOutlineMenu size={20} className='hover:cursor-pointer'/>}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='text-3xl w-full font-bold text-[#00df9a] m-4'>Hi mayank</h1>
          <ul className='uppercase p-4'>
            <li className="p-4 border-b border-gray-600">Company</li>
            <li className="p-4 border-b border-gray-600">Resources</li>
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4">Contact</li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar
