import React, { useContext } from 'react'
import { theme } from '../../theme' 
import { ThemeContext } from '../../App'

export default function ProfileComp(){
  let toDo1="Lorem ipsum..." //Allaxa ayto kai to phra apo to Profile.jsx
    return(
        <>
        <div className="bg-yellow-100  w-[269px] h-[95px] ml-6 my-20 rounded-[25px] 
                         flex items-center "> 
          <button className="border-2 border-black rounded-[4px] w-[24px] h-[24px] ml-4 ">!</button>
          <input type="text" placeholder={toDo1} className="ml-4 bg-blue-100 rounded-[5px] w-[200px] h-[35px] " />
        </div>
      </>
    )
}