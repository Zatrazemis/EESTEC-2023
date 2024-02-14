import React, { useContext } from 'react'
import { theme } from '../../theme' 
import { ThemeContext } from '../../App'
import { useState } from 'react'

export default function ProfileComp1(){
  const theme = useContext(ThemeContext)

  let toDo1="Lorem ipsum..." //Allaxa ayto kai to phra apo to Profile.jsx
  let toDo2="Lorem ipsum..."
  let toDo3="Lorem ipsum..."
  let toDo4="Lorem ipsum..."

  const [isChecked, setIsChecked] = React.useState({
    ischecked: false,
    text: " "
  })

  

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    console.log(isChecked.text)
    // event.preventDefault() Αν υπάρχει, πρεπει να κανω διπλο κλικ στο checkbox
    setIsChecked(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
}

    return(
        <>
        <div className="bg-orange w-[269px] h-[95px] ml-1 mr-4 mb-8 rounded-[25px] 
                         flex items-center "> 
          <input type="checkbox"  className="border-2 border-black rounded-[10px] w-[24px] h-[24px] ml-4 "  
                  id="ischecked" 
                  checked={isChecked.ischecked}
                  onChange={handleChange}
                  name="ischecked"
                  value={isChecked.ischecked}/>
         
          {/* <input type="text" placeholder={toDo1} className="ml-4 bg-blue-100 rounded-[5px] w-[200px] h-[35px] " /> */}
          <textarea  className="ml-4 bg-blue-100 rounded-[5px] w-[200px] h-[35px] "
                      // placeholder={toDo1}
                      value={isChecked.text}
                      name="text"
                      onChange={handleChange}/>
        </div>
      </>
    )
}