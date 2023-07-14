import React, { useContext } from 'react'
import { theme } from '../../theme' 
import { ThemeContext } from '../../App'
import ProfileComp1 from './ProfileComp1'
import ProfileComp2 from './ProfileComp2'
import ProfileComp3 from './ProfileComp3'

function Profile() {

  const theme = useContext(ThemeContext)
  
  

  return (
    <>
    <h1 className="absolute top-[75px] left-[312px] font-bold underline text-[38.73px] ">Kanban-Board</h1>

      <div className="absolute  w-[333px] h-[750px] left-[312px] top-[201px] bg-white drop-shadow-2xl 
                      rounded-2xl   flex flex-col items-center">
        <h2 className="font-bold underline mb-16 text-[24px] ">To-do</h2>

        <ProfileComp1/>
        <ProfileComp1/>
        <ProfileComp1/>
        <ProfileComp1/>

      </div>

      <div className="absolute  w-[333px] h-[750px] left-[697px] top-[201px] bg-white drop-shadow-2xl 
                      rounded-2xl   flex flex-col items-center">

          <h2 className="font-bold underline mb-16 text-[24px] ">Doing</h2>
          <ProfileComp2/>
          <ProfileComp2/>
          <ProfileComp2/>
          <ProfileComp2/>
      </div>

      <div className="absolute  w-[333px] h-[750px] left-[1082px] top-[201px] bg-white drop-shadow-2xl 
                      rounded-2xl   flex flex-col items-center">
          <h2 className="font-bold underline mb-16 text-[24px] ">Done</h2>
          <ProfileComp3/>
          <ProfileComp3/>
          <ProfileComp3/>
          <ProfileComp3/>

      </div>
    
    

    </>
  )
}



export default Profile