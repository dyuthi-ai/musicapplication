import React from 'react'
import Menu from './Menu'
import Logo from './Logo'

const NavBarContainer = () => {
  return (
    <header className='w-[100vw] h-[70px] bg-gray-700 text-black flex justify-between items-center'>
     <Logo/>
      <Menu/>
    </header>
  )
}

export default NavBarContainer
