import React from 'react'
let w1 = "Lorem Ipsum..."
let w2 = "Lorem Ipsum..."
let w3 = "Lorem Ipsum..."

const International = () => {
  return (
    <>
    <div className="absolute max-w-3xl w-full bg-white left-72 top-[620px] h-72 rounded-xl drop-shadow-2xl ">
        <div className="absolute w-40 h-6 left-7 top-7 font-basic font-normal text-lg font-bold underline">International News</div>
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
    </>
  )
}

export default International