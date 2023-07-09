import React from 'react'

function Dashboard() {
  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-GB');

  return (
    <div className="flex-col flex-wrap justify-around items-center visible containre-md">
      <div>
        <h1>Welcome back, <span className="font-bold">John</span></h1>
        <br/>
        <p className="italic">{formattedDate}</p>
      </div>

      <div>
        <p className="font-bold underline">Weekly News</p>

      </div>

      <div>
        <p className="font-bold underline">International News</p>

      </div>
    </div>
  )
}  

export default Dashboard