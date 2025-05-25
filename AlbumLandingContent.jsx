import React from 'react'
import { Outlet } from 'react-router-dom'

const AlbumLandingContent = () => {
  return (
    <div className='basis-[80%] h-[calc(100vh-70px)]'>
     <Outlet/>
    </div>
  )
}

export default AlbumLandingContent
