import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { FiPhone, FiUserPlus } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";
import { TbLogin, TbAperture } from "react-icons/tb";

const NavComponents = ({ side }) => {
  
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    nav("/")
  }
  const handleTheme = () => {
    localStorage.removeItem("token");
    browser.menus.refresh()
  }
  return (
    <div className={`min-w-[250px] fixed   h-full border-r shadow-md bg-white z-50 dark:bg-slate-950  ${side ? "-translate-x-full" : "translate-x-0 duration-300"} flex flex-col`}>
      <div className='py-5  px-4 flex items-center'>
        <div>

          <img className='dark:hidden' src="/dark-logo.svg" alt="" />
          <img className='hidden dark:inline-block' src="/light-logo.svg" alt="" />
        </div>
      </div>

      <div className='flex-grow p-3 flex flex-col space-y-3'>

        <NavLink to="/home/contact" className={"w-full px-3 py-3 rounded-md  inline-flex items-center justify-start gap-3 text-start hover:text-blue-500 hover:bg-blue-100 duration-200 "} >
          <FiPhone className='text-lg' /> Contact Table
        </NavLink>
        <NavLink to="/home/modern" className={"w-full px-3 py-3 rounded-md  inline-flex items-center justify-start gap-3 text-start hover:text-blue-500 hover:bg-blue-100 duration-200"} >
          <TbAperture className='text-xl' /> Modern
        </NavLink>
        <div className='mt-10'>
          <p>Auth</p>
          <div className='flex flex-col space-y-3 mt-3'>

            <NavLink to="/" onClick={handleTheme} className={"w-full px-3 py-3 rounded-md inline-flex items-center justify-start gap-3 text-start hover:text-blue-500 hover:bg-blue-100 duration-200"} >
              <TbLogin className='text-xl' /> Login
            </NavLink>
            <NavLink to="/sign_up" onClick={handleTheme} className={"w-full px-3 py-3 rounded-md inline-flex items-center justify-start gap-3 text-start hover:text-blue-500 hover:bg-blue-100  duration-200"} >
              <FiUserPlus className='text-lg' /> Register
            </NavLink>
          </div>
        </div>

      </div>

      <div className='py-3 px-5'>
        <Button onClick={handleLogout} className="bg-blue-200 py-8 text-lg hover:bg-blue-500 inline-flex justify-between items-center hover:text-white text-gray-600 w-full" >Logout <IoMdLogOut />
        </Button>
      </div>
    </div>
  )
}

export default NavComponents