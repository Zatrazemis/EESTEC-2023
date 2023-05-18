import React, { useContext } from 'react'
import { theme } from '../../theme'
import { ThemeContext } from '../../App'

function Dashboard() {
  const theme = useContext(ThemeContext)
  let date = "April 3rd, 2023, Monday";
  let name = 'John'
  let userPhoto = "src\\assets\\1.png" //ΘΕΛΕΙ ΔΙΠΛΟ / ΓΙΑ ΝΑ ΓΙΝΕΙ ΕSCAPED
  let w1 = "Lorem Ipsum..."
  let w2 = "Lorem Ipsum..."
  let w3 = "Lorem Ipsum..."
  return (
    <>
    <div> 
      <div className="absolute max-w-3xl w-full h-44 left-72 top-11 bg-white drop-shadow-2xl rounded-2xl">
        <div className="absolute top-7 w-30 h-10 left-5 font-basic font-normal text-3xl leading-10 ">Welcome back, {name}</div>
        <div className="absolute w-56 h-2 top-32 left-5">{date}</div>
        <img src={userPhoto} className="absolute w-48 h-48 right-5" />
      </div>
      <div className="absolute max-w-3xl w-full bg-white left-72 top-72 h-72 rounded-xl shadow-2xl ">
        <div className="absolute w-32 h-6 left-7 top-7 font-basic font-normal text-lg font-bold underline">Weekly News</div>
        <div className="absolute max-w-xl w-full bg-orange h-14 top-20 left-6 rounded-3xl  ">
          <div className="font-basic ml-8 mt-3 font-semibold text-xl ">{w1}</div>
        </div>

        <div className="absolute max-w-xl w-full bg-pink h-14 top-36 left-6 rounded-3xl  ">
          <div className="font-basic ml-8 mt-3 font-semibold text-xl ">{w1}</div>
        </div>
        <div className="absolute max-w-xl w-full bg-purple h-14 top-52 left-6 rounded-3xl  ">
          <div className="font-basic ml-8 mt-3 font-semibold text-xl ">{w1}</div>
        </div>
        <div className="absolute w-16 h-4 right-5 top-7 underline">
          <a href="/news">View all</a></div>
     </div>
     <div className="fixed right-0 inset-y-64 h-screen overflow-hidden flex justify-center max-w-md bg-white drop-shadow-2xl rounded-xl w-full ">
        <div className="bg-gray-500 max-w-sm w-full flex justify-center items-center h-64 mt-10 rounded-2xl ">Calendar</div>
        
     </div>
      </div>

    </>
  )
}

export default Dashboard