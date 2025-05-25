import React from 'react'
import ProfileContent from './ProfileContent'
import ProfileSideBar from './ProfileSideBar'

const ProfileContainer = () => {
  return (
   <section className='flex w-[100%]'>
    <ProfileSideBar/>
    <ProfileContent/>
   </section>
  )
}

export default ProfileContainer
