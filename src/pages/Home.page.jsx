
import { useEffect, useState } from 'react'
import NavComponents from '../components/nav/Nav.components'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthGuard } from '../components/guard/Auth.guard'
import { useSelector } from 'react-redux'
import MobileNavComponents from '../components/nav/MobileNav.components'

const HomePage = () => {
  const nav = useNavigate();
  const [side, setSide] = useState(true);
  const theme = useSelector((state) => state.theme.mode);
  console.log(side)
  const root = window.document.documentElement;
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      nav("/")
    } else if (theme === "dark") {
      root.classList.remove("light");
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [theme])
  return (
    <AuthGuard check={!localStorage.getItem("token")} path={"/"} >
      <div className={`relative flex flex-col `}>
        <NavComponents side={side} />
        <MobileNavComponents side={side} setSide={setSide} />
        <div className={`flex flex-col`}>
            <div className='h-[50px]'></div>
          
          <div className={`inline-block lg:flex`}>
            <div className={`${side ? "w-0" : "w-96"} hidden lg:block h-full duration-150 transition-all bg-gray-500`}></div>
            <Outlet />
          </div>
        </div>

      </div>


    </AuthGuard>
  )
}

export default HomePage