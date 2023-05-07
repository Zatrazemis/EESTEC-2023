import React from 'react'


const Sidebar = () => {
  return (
    <>
    <div className="w-60 bg-gray-500 h-screen rounded-tr-xl rounded-br-xl">
      <div className='w-44 ml-8 mb-10'>
       <a href='#'> <img src="src\assets\LC_Thessaloniki_white.png" alt="" /></a>
      </div>
      <div className="flex justify-center items-center font-sans text-2xl text-left "> 
        <ul className=''>
         <a href='#'><li className='border-8 border-transparent hover:border-white hover:text-red-500 hover:bg-white hover:rounded-xl'>Dashboard</li></a>
         <a href='#'><li className='mt-28 border-8 border-transparent hover:border-white hover:text-red-500 hover:bg-white hover:rounded-xl'>Profile</li></a>
         <a href='#'><li className='mt-28 border-8 border-transparent hover:border-white hover:text-red-500 hover:bg-white hover:rounded-xl'>Team</li></a>
         <a href='#'><li className='mt-28 border-8 border-transparent hover:border-white hover:text-red-500 hover:bg-white hover:rounded-xl'>News</li></a>
         <a href='#'><li className='mt-28 border-8 border-transparent hover:border-white hover:text-red-500 hover:bg-white hover:rounded-xl'>Calendar</li></a>
        </ul>
        
        </div>
    </div>
    </>
  )
}

export default Sidebar