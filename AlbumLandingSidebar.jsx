import React from 'react'
import { BiSolidAlbum } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

const AlbumLandingSidebar = () => {
  return (
    <aside className='basis-[15%] bg-gray-600 h-min-[calc(100vh-70px)] text-white'>
<nav className='w-full px-5 py-3 '>
    <ul className='w-full flex flex-col'>
        <li className='py-2 px-6 bg-gray-500 rounded flex items-center gap-3 mb-3'>
            <span className='text-xl '><GiHamburgerMenu/></span>
            <span className='text-lg tracking-wider'>Explore</span>
        </li>
        <li>
           <NavLink to={"/"} end className={( {isActive}) => `${isActive?"bg-blue-600 hover:bg-blue-700":""} py-2 px-6 hover bg-blue-600 cursor-pointer flex items-center gap-2 rounded`}>
            <BiSolidAlbum/>
            <span >Popular Albums</span>
           </NavLink>
        </li>
    </ul>
</nav>
    </aside>
  )
}

export default AlbumLandingSidebar
