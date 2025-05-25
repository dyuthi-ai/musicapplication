import React from 'react'


import AdminContent from './AdminContent'
import AdmiNSideBar from './AdmiNSideBar.jsx'

const AdminContainer = () => {
  return (
    <section className='w-[100vw] flex'>
      <AdmiNSideBar/>
      <AdminContent/>
    </section>
  )
}

export default AdminContainer
