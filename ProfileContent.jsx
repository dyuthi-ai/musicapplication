import React from 'react'
import { Outlet } from 'react-router-dom'

const ProfileContent = () => {
  return (
    <div className='basis-[90%]'>
      <Outlet/>
    </div>
  )
}

export default ProfileContent
