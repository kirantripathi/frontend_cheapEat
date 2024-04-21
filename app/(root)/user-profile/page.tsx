"use client"

import { useGetMyUser, useUpdateMyUser } from '@/app/api/MyUserApi'
import useProtectedRoute from '@/authServices/ProtectedRoute'

import UserProfileForm from '@/components/userForm/userProfileForm'
import React from 'react'


const page = () => {


  //hook which redirect user back to home page if not authenticated
 useProtectedRoute();
  const {updateUser,isPending} = useUpdateMyUser()
   const {currentUser,isLoading} = useGetMyUser()

   
  


   if(isLoading) {
  return  <span>Loading...</span>
   }

  return (
  

  
          <UserProfileForm 
    currentUser={currentUser}
    loading={isPending} onSave={updateUser} />
 
   
  )
}

export default page