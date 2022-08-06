import React from 'react'
import bannerPic from '../assets/banner1.jpg'
function Banner() {
  return (
    <>
      <div className= {`bg-[url(${bannerPic})] h-[40vh] md:h-[60vh] width="150" bg-center bg-cover
      flex items-end justify-center`}>
      <div className = " text-xl md:text-3xl text-white p-60vh bg-gray-900 bg-opacity-50 w-full flex justify-center">
      FRIENDS : I will be there for you

      </div>

      </div>
    </>
  )
}

export default Banner