"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import home from "../../assets/home.png"
import landing from "../../assets/landing.png"
import appDownload from "../../assets/appDownload.png"



const Home = () => {
 
  const [value,setValue] = useState("")

  return (
    <main className="flex justify-center h-full">
    <div className="w-[90%] h-full ">
          <Image
         src ={home}
         alt="landing image"
      width={0}
         height={0}
         sizes="100vw"
         className='w-full max-h-[600px] object-cover  '
          />
        
        <div className="flex flex-col gap-12 items-center mb-20">
      <div className="md:px-32 w-[90%] bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
  

        <SearchBar  />
      

        </div>
        </div>

        <Image
         src ={landing}
         alt="landing image"
      width={0}
         height={0}
         sizes="100vw"
         className='w-full max-h-[600px] object-contain  '
          />

<div className=' flex flex-col items-center gap-5'>
 
 
<div className='text-center  '>
<h1 className='text-3xl font-bold text-black mb-2'>Order Take-away even faster</h1>
  <span className=' text-gray-500'>
    Download the CheapEats app for faster ordering and personalized recommendation
  </span>
</div>




<Image
         src ={appDownload}
         alt="landing image"
      width={0}
         height={0}
       sizes="20vw"
         className='w-full max-w-[300px] object-contain  '
          />
</div>



    </div>
  </main>
  );
}

export default Home
