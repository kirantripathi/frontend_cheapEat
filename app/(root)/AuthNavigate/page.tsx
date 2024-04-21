"use client"

import { useCreateMyUser } from '@/app/api/MyUserApi';
import {  User, useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useRef } from 'react'
import { redirect, } from 'next/navigation'

const AuthCallbackPage = () => {

  
    const {user} = useAuth0();
    const {createUser} = useCreateMyUser()
    

    const hasCreatedRef = useRef(false)

    useEffect(() => {
console.log('hrhrr')
        onRedirectCallback(user);

    },[])

    const onRedirectCallback = (user?:User) => {
       
        //hasscreatedref is used to make sure useeffect hook doesn't run more than once as ref doesnt get updated like state in every rerender

            if(user?.sub && user?.email && !hasCreatedRef.current) {
                createUser({
                    auth0Id:user?.sub,
                    email:user?.email
                })
                hasCreatedRef.current=true
                redirect("/")
            }
          
                console.log("auth O navigate page called again")
            

    }

  return (
    <>Loading...</>
  )
}

export default AuthCallbackPage