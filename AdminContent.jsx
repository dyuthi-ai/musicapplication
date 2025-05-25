import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminContent = () => {
  return (
    <aside className='basis-[85%] h-[calc(100vh-70px)]'>
      <Outlet/>
    </aside>
  )
}

export default AdminContent
