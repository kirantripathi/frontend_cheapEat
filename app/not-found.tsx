'use client'

import React,{useLayoutEffect} from 'react'
import { useRouter } from 'next/navigation';

const NotFound = () => {
    const router = useRouter();

    useLayoutEffect(() => {
            router.push('/')
    },[router])

  return (
    <div>
        <h1>You will be redirected to home page</h1>

    </div>
  )
}

export default NotFound