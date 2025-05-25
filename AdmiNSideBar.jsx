import React from 'react'

import { RiFolderMusicFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

const AdmiNSideBar = () => {
  return (
   <aside className='basis-[14%] min-h-[calc(100vh-70px)] bg-gray-700 text-white'>
    <nav className='w-full'>
        <ul className='w-full p-6'>
        <li>
            <NavLink 
            to={"create-album"}
            className={({isActive})=>`px-4 py-2 flex items-center gap-2 hover:bg-blue-600 rounded-md cursor-pointer ${isActive?"bg-blue-600":""}`}>
                <span className='text-lg'><RiFolderMusicFill/></span>
                <span className='font-semibold'>Create Album</span>
            </NavLink>
        </li>
        </ul></nav>
   </aside>
  )
}

export default AdmiNSideBar
