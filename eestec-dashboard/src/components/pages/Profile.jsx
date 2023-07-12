import React, { useContext } from 'react'
import { theme } from '../../theme' 
import { ThemeContext } from '../../App'
import ProfileComp from './ProfileComp'


function Profile() {

  const theme = useContext(ThemeContext)
  
  let toDo1="Lorem ipsum..."
  let toDo2="Lorem ipsum..."
  let toDo3="Lorem ipsum..."
  let toDo4="Lorem ipsum..."
  let doing1="Lorem ipsum..."
  let doing2="Lorem ipsum..."
  let doing3="Lorem ipsum..."
  let doing4="Lorem ipsum..."
  let done1="Lorem ipsum..."
  let done2="Lorem ipsum..."
  let done3="Lorem ipsum..."
  let done4="Lorem ipsum..."

  return (
    <>
    <h1 className="w-{343} h-{64} t-{89} l-{337}">Kanban-Board</h1>
    <div className="absolute  w-[333px] h-[750px] left-[312px] top-[201px] bg-white drop-shadow-2xl 
                    rounded-2xl   flex flex-col">
      <h2 className="font-bold underline">To-do</h2>

      <div className="bg-yellow-100  w-[269px] h-[95px] ml-6 my-20 rounded-[25px] 
                       flex items-center "> 
        <button className="border-2 border-black rounded-[4px] w-[24px] h-[24px] ml-4 ">!</button>
        <input type="text" placeholder={toDo1} className="ml-4 bg-blue-100 rounded-[5px] w-[200px] h-[35px] " />
      </div>
      
      <ProfileComp />

    </div>
    
    </>
  )
}



export default Profile