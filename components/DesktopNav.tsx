"use client"

import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react";
import { CircleUser } from 'lucide-react';
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import UserNameMenu from "./UserNameMenu";

const DesktopNav = () => {

  const { loginWithRedirect,isAuthenticated,user,logout } = useAuth0();



  return (
  <>
  
   {
    isAuthenticated ? 

    <UserNameMenu  />

    :

    <Button 
    onClick={  () =>  loginWithRedirect()}
    variant="ghost" className="text-2xl text-black font-bold hover:text-orange-500 hover:bg-white">Log In
    </Button>

   
   }
  </>
  )
}

export default DesktopNav