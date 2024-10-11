import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className=' text-center'>
        <img src="/404.png" className='w-[500px] mx-auto mb-4' alt="404" />
        <div>
            <h1 className='text-4xl font-medium text-gray-700 mb-5'>Oops, looks like the page is lost.
            </h1>
            <p className='text-2xl font-medium text-gray-600 '>This is not a fault, just an accident that was not intentional.</p>
        </div>
    </div>
    </div>
  )
}

export default NotFoundPage