import React from 'react'


const Sidebar = () => {
  return (
    <>
    <div className="z-10 px-10 max-w-xs h-screen bg-gray-800 top-0 rounded-tr-md rounded-br-md fixed ">
        <div className='my-9 z-50'> 
            <img src="src/assets/Picture1.png" alt="" />
        </div>

        <ul className='text-white p-10 font-normal space-y-20 font-serif text-4xl mt-20'>
            <li className='hover:text-red500'>Dashboard</li>
            <li>Profile</li>
            <li>Team</li>
            <li>Calendar</li>
            <li>News</li>

        </ul>
        </div>
    
    </>
  )
}

export default Sidebar