import React from 'react'
import moviePic from '../assets/movielogo.jpg'
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (

    <div className="flex border items-center ">
        <img className = " w-[70px] md:w-[150px]" src = {moviePic} height="150" ></img>
        <Link to ="/" className="text-blue-400 font-bold  text-xl md:text-3xl px-5   "> Movies </Link>
        <Link to ="favourites" className="text-blue-400 font-bold  text-xl md:text-3xl px-5 "> Favourites  </Link>
    </div>
  )
}
