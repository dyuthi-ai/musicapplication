import React from 'react'
import logs from "../../assets/logs.png"


const Logo = () => {
  return (
    <aside className='basis-[15%] '>
      <figure className='w-full h-full flex justify-center' >
        <img src={logs} alt="image" className='w-[100px] h-[70px]' />
      </figure>
    </aside>
  )
}

export default Logo
