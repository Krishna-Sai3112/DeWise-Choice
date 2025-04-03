"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn,signOut } from 'next-auth/react'


const Navbar = () => {


  const { data: session } = useSession()
  // if(session) {
  //   return (<>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  //   )
  // }s

  // return (<>
  //   Not signed in <br/>
  //   <button onClick={() => signIn()}>Sign in</button>
  // </>
  // )


   const [showdropdown1, setShowdropdown1] = useState(false)
   const [showdropdown2, setShowdropdown2] = useState(false)
   const [showdropdown3, setShowdropdown3] = useState(false)
   const [showdropdown4, setShowdropdown4] = useState(false)

  return (
    <div className='sticky top-0'>
    <div className='w-full h-[80px] min-h-[50px] bg-black text-gray-100 flex justify-between items-center'>
      <Link href={"/"} className="sitename mx-5">
        <h1 className='font-bold text-2xl cursor-pointer'>DeWise Choice</h1>
      </Link>
      <div className="navelements flex items-center h-full">
        
        <button onClick={()=>{setShowdropdown1(!showdropdown1)}} onBlur={()=>{setShowdropdown1(false)}} className='h-full w-full hidden md:flex items-center justify-center text-gray-100 px-5 font-semibold'>
            Phones
        </button>
        <button onClick={()=>{setShowdropdown2(!showdropdown2)}} onBlur={()=>{setShowdropdown2(false)}} className='h-full w-full hidden md:flex items-center justify-center text-gray-100 px-5 font-semibold'>
            Laptops
        </button>
        <button onClick={()=>{setShowdropdown3(!showdropdown3)}} onBlur={()=>{setShowdropdown3(false)}} className='h-full w-full hidden md:flex items-center justify-center text-gray-100 px-5 font-semibold'>
            Tablets
        </button>
        
        <button onClick={()=>{setShowdropdown4(!showdropdown4)}} onBlur={()=>{setShowdropdown4(false)}} className={`${session?"":"hidden"} mx-5 w-[135px] bg-white py-3 px-8 border border-white text-black font-semiboldbold rounded-lg`}>Welcome</button>
        <Link href={"/login"} className={`${session?"hidden":""}  mx-5 w-[135px] bg-orange-700 py-3 px-4 border border-white text-white font-semiboldbold rounded-full `}>Signup/Login</Link>
      </div>
    </div>
    <div className={`${showdropdown1?"":"hidden"} flex flex-col w-[120px] fixed right-[360px] bg-black text-gray-100`}>
        <ul className='w-full flex justify-center items-center flex-col text-sm'>
            <Link href={"/devices/phones/latest"} className='px-2 py-2 font-semibold hover:bg-neutral-800 w-full flex justify-center hover:ease-in-out'>Latest</Link>
            <Link href={"/devices/phones/best-in-class"} className='px-2 py-2 font-semibold hover:bg-neutral-800 w-full flex justify-center'>Best in class</Link>
            <Link href={"/devices/phones/upcoming"} className='px-2 py-2 font-semibold hover:bg-neutral-800 w-full flex justify-center'>Upcoming</Link>
        </ul>
    </div>
    <div className={`${showdropdown2?"":"hidden"} flex flex-col w-[120px] fixed right-[261px] bg-black text-gray-100`}>
        <ul className='w-full flex justify-center items-center flex-col text-sm'>
            <Link href={"/devices/laptops/latest"} className='px-2 py-2 font-semibold hover:bg-neutral-800 w-full flex justify-center'>Latest</Link>
            <Link href={"/devices/laptops/best-in-class"} className='px-2 py-2 font-semibold hover:bg-neutral-800 w-full flex justify-center'>Best in class</Link>
            <Link href={"/devices/laptops/upcoming"} className='px-2 py-2 font-semibold hover:bg-neutral-800 w-full flex justify-center'>Upcoming</Link>
        </ul>
    </div>
    <div className={`${showdropdown3?"":"hidden"} flex flex-col w-[120px] fixed right-[162px] bg-black text-gray-100`}>
        <ul className='w-full flex justify-center items-center flex-col text-sm'>
            <Link href={"/devices/tablets/latest"} className='px-2 py-2 font-semibold hover:bg-neutral-800 w-full flex justify-center'>Latest</Link>
            <Link href={"/devices/tablets/best-in-class"} className='px-2 py-2 font-semibold hover:bg-neutral-800 w-full flex justify-center'>Best in class</Link>
            <Link href={"/devices/tablets/upcoming"} className='px-2 py-2 font-semibold hover:bg-neutral-800 w-full flex justify-center'>Upcoming</Link>
        </ul>
    </div>
    <div className={`${showdropdown4?"":"hidden"} flex flex-col w-[120px] fixed right-[30px] bg-black text-white`}>
      <ul className='w-full flex justify-center items-center flex-col text-sm'>
        {session && <Link href={`/${session.user.email}`} onClick={()=>{setShowdropdown4(!showdropdown4)}} className='px-2 py-2 font-semibold hover:bg-neutral-800 w-full flex justify-center'>Profile</Link>}
        <button onClick={() => {signOut(); showdropdown4(!showdropdown4)}} className='px-2 py-2 font-semibold hover:bg-neutral-800 w-full flex justify-center'>Logout</button>
      </ul>
    </div>
    </div>
  )


}

export default Navbar
