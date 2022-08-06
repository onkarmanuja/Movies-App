import React from 'react'
import bannerPic from '../assets/banner1.jpg';

function Cards() {
  return (
    <>
    
    <div className= {`bg-[url(${bannerPic})] h-[30vh] w-[200px] md:h-[40vh] md:w-[450px] bg-center bg-cover rounded-xl
    flex items-end m-8 hover:scale-110 ease-out duration-300`}>
    <div className = "text-3xl text-white p-60vh bg-gray-900 bg-opacity-50 w-full flex justify-center  rounded-b-xl">
    FRIENDS 

    </div>
     </div>   
    
  </>
  )
}

export default Cards