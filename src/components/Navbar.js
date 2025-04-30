
import React from 'react'

export default function Navbar(props) {
  return (
   <>
   <nav className='bg-black w-[100%] p-4 flex justify-around items-center text-white'>
    <div className="logo text-3xl">
   {props.title}
    </div>
    <div className="navbar">
        <ul className='flex gap-8 text-xl cursor-pointer'>
            <li className='relative'>Home</li>
            <li className='relative'>About</li>
            <li className='relative'>Info</li>
            <li className='relative'>Contact</li>
        </ul>
    </div>
   </nav>
   
   
   </>
  )
}
