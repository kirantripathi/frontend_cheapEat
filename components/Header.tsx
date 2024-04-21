import Link from "next/link"
import MobileNav from "./MobileNav"
import DesktopNav from "./DesktopNav"


const Header = () => {
  return (
    <div className="flex border-b-[4px] border-orange-500 justify-between self-center w-[90%]  p-5">
   <Link href="/">
   <h1 className="text-3xl font-bold tracking-tight text-orange-500">CheapEats.com</h1>
   </Link>

   <div className="hidden md:block">
   <DesktopNav />
   </div>
    
   <div className=" md:hidden">
    <MobileNav />
    </div>

</div>
  )
}

export default Header