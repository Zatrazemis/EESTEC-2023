import React from 'react'

function Profile() {
  return (
    <div>
      <h1 className="font-bold underline">Kanban-Board</h1>
      <div className="flex">

        <div className="flex-col w-80 h-96 top-52 left-80 rounded-3xl">
            <p className="justify-self-center">To-do</p>
        </div>

        <div className="flex-col">
            <p className="justify-self-center">Doing</p>
        </div>

        <div className="flex-col">
            <p className="justify-self-center">Done</p>
        </div>

      </div>
    </div>
  )
}

export default Profile