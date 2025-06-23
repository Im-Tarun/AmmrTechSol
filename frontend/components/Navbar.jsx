
import React from 'react'
import { NavLink } from 'react-router-dom'


let rightNavCss =" py-2 px-4 my-2 mb-2 text-lg  focus:outline-none bg-gray-600 font-bold  rounded-lg hover:bg-gray-100 hover:text-blue-700 flex "
const Navbar = () => {

  
  return (
    <div className='h-18 text-2xl w-full bg-gray-900 z-50 fixed top-0'>
        
    <div className='flex h-full justify-between items-center  px-14 '>
      
        <NavLink className=" hover:scale-110 duration-200 font-bold text-xl bg-gradient-to-r from-[#00aaff] to-[#fff] inline-block text-transparent bg-clip-text"  to="/" >View Items </NavLink >
        <div className=' flex text-white'>
        <NavLink className={(e)=>{return e.isActive?(rightNavCss +" btnFocused "):rightNavCss}} to={"/create"} > Add Item </NavLink >
      
        </div>
    </div>
    </div>
  )
}

export default Navbar
