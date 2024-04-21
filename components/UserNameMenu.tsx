

import { Button } from "./ui/button"
import { CircleUser } from 'lucide-react';
import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const UserNameMenu = () => {

    const { loginWithRedirect,isAuthenticated,user,logout } = useAuth0();

 
    const logUserOut = () => {
        logout()
    }

  return (
    <div className="flex gap-x-5  items-center">

    <div>
     <Link href="/">
     <span className="hover:text-orange-500 text-2xl font-bold">Order Status</span>
     </Link>
    </div>
  
  <div className="flex gap-x-3">
   
   <Popover>
   <PopoverTrigger>
  <div className="flex gap-x-3">
  <CircleUser size={30} className="text-orange-500" />
    <h1 className="text-black font-bold text-2xl">Hello {user?.name}</h1>
  </div>
    </PopoverTrigger>
  
    <PopoverContent className="w-auto">
  
  
    <div className="space-y-2 flex flex-col">
    <Button asChild className="hover:text-orange-500 text-xl" variant="outline">
      <Link 
      href=""
      >
        My Restaurant
      </Link>
    </Button>
  
    <Button asChild className="hover:text-orange-500 text-xl" variant="outline">
      <Link
      href="/user-profile"
      >
      User Profile
      </Link>
    </Button>
  
    <Button onClick={logUserOut} className="text-xl text-white bg-black " variant="default">Logout</Button>
  
    </div>
  </PopoverContent>
   </Popover>
  
  
  </div>
  
  </div>
  )
}

export default UserNameMenu