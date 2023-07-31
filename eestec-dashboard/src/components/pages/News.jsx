import React from 'react'
let number = 10;
let title = "TITLE";
let content = "CONTENT";

function News() {
  return (
    <>
    <div>
      <div className="w-[704px] h-[830px] top-[117px] rounded-[25px] bg-white shadow-2xl flex fixed left-[336px]">
        <div className="absolute top-[25px] text-2xl left-[32px] font-bold">Weekly News #{number}</div> 
        <div className="absolute top-[70px] w-[650px] left-[27px] flex justify-center items-center rounded-[25px] h-[87px] bg-orange ">
          <div className="absolute font-bold text-2xl h-[45px] text-white ">{title}</div>
        </div>
        <div className="absolute top-[235px] left-[27px] bg-purple w-[650px] justify-center items-center flex rounded-[25px] h-[490px] text-white ">
          <div className="absolute font-bold text-2xl h-[45px] text-white ">{content}</div>
        </div>
        <div className="absolute bottom-[34px] right-[25px]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
</svg>

        </div>
        <div className="absolute bottom-[34px] left-[25px] rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
</svg>

        </div>

      </div>

    </div>
    </>
  )
}

export default News