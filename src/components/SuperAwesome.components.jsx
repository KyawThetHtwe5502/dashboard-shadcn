import React from 'react'
import { TbMessage2 } from "react-icons/tb";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const SuperAwesomeComponents = () => {
  return (
      <Card className=" p-8">
        <div className='flex justify-between gap-x-5 items-center mb-12'>
          <img src="user-6.jpg" className='w-[72px] h-[72px] rounded-lg' alt="" />
          <div>
            <h5 className='text-lg font-semibold'>Super awesome, Vue coming soon!</h5>
            <p className='text-sm text-gray-500'>22 March, 2024</p>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <img src="user-6.jpg" className='w-11 h-11 rounded-full border-2 border-white ' alt="" />
            <img src="user-1.jpg" className='w-11 h-11 rounded-full border-2 border-white -ms-2' alt="" />
            <img src="user-7.jpg" className='w-11 h-11 rounded-full border-2 border-white -ms-2' alt="" />
            <img src="user-2.jpg" className='w-11 h-11 rounded-full border-2 border-white -ms-2' alt="" />
          </div>
          <span className='inline-flex w-10 h-[44px] bg-[#f6f9fc] rounded-md justify-center items-center'>
            <TbMessage2 className='text-blue-500' />
          </span>
        </div>
      </Card>
  )
}

export default SuperAwesomeComponents