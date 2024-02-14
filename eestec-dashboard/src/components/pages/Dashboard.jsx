import React, { useContext } from 'react'
import { theme } from '../../theme'
import { ThemeContext } from '../../App'
import Weekly from './News/weekly';
import International from './News/International';

function Dashboard() {
  const theme = useContext(ThemeContext)
  let date = "April 3rd, 2023, Monday";
  let name = 'John'
  let userPhoto = "src\\assets\\1.png" //ΘΕΛΕΙ ΔΙΠΛΟ / ΓΙΑ ΝΑ ΓΙΝΕΙ ΕSCAPED
  let w1 = "Lorem Ipsum..."
  let w2 = "Lorem Ipsum..."
  let w3 = "Lorem Ipsum..."
  let event1 = "Lorem Ipsum..."
  let event2 = "Lorem Ipsum..."
  let task1 = "Task1"
  let task2 = "Task2"
  let task3 = "Task3"
  return (
    <>
    <div> 
      <div className="absolute max-w-3xl w-full h-44 left-72 top-11 bg-white drop-shadow-2xl rounded-2xl">
        <div className="absolute top-7 w-30 h-10 left-5 font-basic font-normal text-3xl leading-10 ">Welcome back, {name}</div>
        <div className="absolute w-56 h-2 top-32 left-5">{date}</div>
        <img src={userPhoto} className="absolute w-48 h-48 right-5" />
      </div>
      <Weekly />
      <International /> 
     <div className="fixed flex right-0 inset-y-28 h-screen overflow-hidden flex justify-center max-w-md bg-white shadow-2xl rounded-2xl w-full ">
        <div className="bg-gray-300 max-w-sm w-full flex justify-center items-center h-64 mt-10 rounded-2xl ">Calendar</div>
        <div className="absolute w-44 h-6 top-80  left-8 text-xl font-bold ">Upcoming Events</div>
        <div className="absolute w-96 h-20 left-8 rounded-xl bg-gray-300 text-xl font-semibold text-center top-96">{event1}</div>
        <div className="absolute w-96 h-20 left-8 rounded-xl bg-gray-300 text-xl font-semibold text-center top-[485px]">{event2}</div>
        <div className="absolute w-48 h-6 top-[600px]  left-8 text-xl font-bold ">Uncompleted Tasks</div>
        <div className="absolute bg-gray-300 max-w-sm w-full text-3xl leading-loose items-center h-48 top-[640px] text-center rounded-2xl "> 
          <ul>
            <li>{task1}</li>
            <li>{task2}</li>
            <li>{task3}</li>
          </ul>
        </div>
     </div>
      </div>//precise pixels

    </>
  )
}

export default Dashboard