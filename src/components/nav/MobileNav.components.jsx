import React from 'react'
import { TbMenu2 } from "react-icons/tb";
import { FiMoon, FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/slice/themeSlice';
const MobileNavComponents = ({ side, setSide }) => {
    const handleClick = () => {
        setSide(!side)
    }
    const theme = useSelector((state) => state.theme.mode);
    const dispatch = useDispatch();
    return (

        <div className=' fixed z-30 bg-white dark:bg-slate-950 shadow-md py-5 w-full border-b-2  '>
            <div className='container flex'>

                <div className='mx-auto'>
                    <img src="/dark-logo.svg" className='dark:hidden' alt="" />
                    <img src="/light-logo.svg" className='hidden dark:inline-block' alt="" />
                </div>
                <div className='flex items-center space-x-3'>

                    <button className='hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-blue-500 dark:hover:text-blue-500  w-10 h-10 flex justify-center items-center rounded-full' onClick={() => dispatch(toggleTheme())}>
                        {theme === "dark" ? <FiSun className='text-xl text-gray-500 hover:text-blue-500' /> : <FiMoon className='text-xl' />}
                    </button>
                    <button onClick={handleClick} className='dark:text-gray-500 active:scale-110 duration-100 transition-all' >
                        <TbMenu2 />
                    </button>
                </div>
            </div>
        </div>

    )
}

export default MobileNavComponents