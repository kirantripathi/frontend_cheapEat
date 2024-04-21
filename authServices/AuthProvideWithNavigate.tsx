"use client"

import {  Auth0Provider,  } from '@auth0/auth0-react'
import { useRouter } from 'next/navigation'

type Props  = {

    children:React.ReactNode
}

const AuthProvideWithNavigate = ({children}:Props) => {

   
    const router = useRouter()

    const AUTH0_DOMAIN = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
    const AUTH0_CLIENT_ID = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;
    const AUTH0_CALLBACK_URL = process.env.NEXT_PUBLIC_AUTH0_CALLBACK_URL;
    const audience = process.env.NEXT_PUBLIC_AUTH0_AUDIENCE

    console.log(AUTH0_DOMAIN,"a",AUTH0_CLIENT_ID,"b",AUTH0_CALLBACK_URL,"aud",audience)
 
    if (!AUTH0_DOMAIN || !AUTH0_CALLBACK_URL || !AUTH0_CLIENT_ID || !audience) {
        throw new Error('unable to initialize auth');
    }


    const onRedirectCallback = () => {
   

        router.push('/AuthNavigate')

    }

  return (
    <Auth0Provider
    domain={AUTH0_DOMAIN}
    clientId={AUTH0_CLIENT_ID}
    authorizationParams={{
        redirect_uri:AUTH0_CALLBACK_URL,
        audience :audience
    }}
    onRedirectCallback={onRedirectCallback}
    >
        
        {children}
    </Auth0Provider>
  )
}

export default AuthProvideWithNavigate