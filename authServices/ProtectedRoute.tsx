import { useAuth0 } from '@auth0/auth0-react'
import { redirect } from 'next/navigation'
import React from 'react'

const useProtectedRoute = () => {
 
const {isAuthenticated} = useAuth0()

 
if(!isAuthenticated) {
  redirect("/")  
}

}

export default useProtectedRoute