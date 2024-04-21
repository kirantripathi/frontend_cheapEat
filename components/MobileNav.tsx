"use client"

import React from 'react'
import { Button } from "./ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { CircleUser, Menu } from 'lucide-react';
  import { useAuth0 } from "@auth0/auth0-react";
import Link from 'next/link';

const MobileNav = () => {

  const { loginWithRedirect,isAuthenticated,user,logout } = useAuth0();

 
  const logUserOut = () => {
    logout()
}

  return (
    <Sheet>
    <SheetTrigger asChild>
      <Button className="md:hidden" variant="outline">    <Menu className='text-orange-500' /></Button>
    </SheetTrigger>
    <SheetContent className="min-w-[500px]">
      <SheetHeader>
        <SheetTitle className="text-center text-2xl text-block font-bold p-5 border-b-[2px] border-gray-100">
  
  {
    isAuthenticated ?
    <div className="flex gap-x-3">
    <CircleUser size={30} className="text-orange-500" />
      <h1 className="text-black font-bold text-2xl">Hello {user?.name}</h1>
    </div>
    :
    <span>Welcome to CheapEats.com</span>
  }

        </SheetTitle>
      </SheetHeader> 
      {
        isAuthenticated ?

      <div className='flex flex-col gap-y-5'>

<Link href="/user-profile" className="font-bold text-2xl hover:text-orange-500">
            User Profile
          </Link>

          <Button onClick={logUserOut} className=" text-xl text-white bg-black " variant="default">Logout</Button>
      </div>

        :
<Button onClick={() => loginWithRedirect()} className=" mt-5 w-full py-8 text-lg bg-orange-500 hover:bg-orange-500 text-white font-bold">Log In</Button>
      }
    </SheetContent>
  </Sheet>
  )
}

export default MobileNav