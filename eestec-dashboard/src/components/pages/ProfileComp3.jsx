import React, { useContext } from 'react'
import { theme } from '../../theme' 
import { ThemeContext } from '../../App'
import { useState } from 'react'


export default function ProfileComp3(){

    const theme = useContext(ThemeContext)

   let done1="Lorem ipsum..."
  let done2="Lorem ipsum..."
  let done3="Lorem ipsum..."
  let done4="Lorem ipsum..."

    return(
        <>
        <div className="bg-purple w-[269px] h-[95px] ml-1 mr-4 mb-8 rounded-[25px] 
                         flex items-center "> 
          <input type="checkbox"  className="border-2 border-black rounded-[10px] w-[24px] h-[24px] ml-4 " />
         
          <input type="text" placeholder={done1} className="ml-4 bg-blue-100 rounded-[5px] w-[200px] h-[35px] " />
        </div>
        </>
    )
}