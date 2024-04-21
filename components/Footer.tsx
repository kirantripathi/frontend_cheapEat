import Link from "next/link"


const Footer = () => {
  return (
    <div className="mt-10 bg-orange-500 flex justify-center">
    <div className="flex justify-between items-center flex-col md:flex-row  w-[90%]  p-10">
         <h1 className="text-3xl  w-full   text-center md:text-left text-white">CheapEats.com</h1>
        
        <div className=" justify-center w-full  flex flex-row gap-4">
       <Link href="/">
       <h2 className="text-xl  text-white">Privacy Policy</h2>
       </Link>
       <Link href="/">
       <h2 className="text-xl text-white">Terms of Service</h2>
        </Link>
 
        </div> 
 
     </div>
    </div>
  )
}

export default Footer