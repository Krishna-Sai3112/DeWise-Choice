"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn,signOut } from 'next-auth/react'
import { useState } from 'react'

const Footer = () => {


  return (
    <div className='w-full h-[80px] min-h-[65px] bg-gray-900 flex flex-col justify-center items-center'>
        <ul className='text-sm text-gray-500 flex justify-center items-center my-2'>
            <Link href={"/about"} className='px-5 hover:text-gray-300 cursor-pointer'>About</Link>
            <Link href={"/contactus"} className='px-5 hover:text-gray-300 cursor-pointer'>Contact us</Link>
            <Link href={"/enterdata"} className='px-5 hover:text-gray-300 cursor-pointer'>Add Device</Link>
        </ul>
      <footer className='text-sm text-gray-500 my-2'>Project made by Likith K | All rights Reserved</footer>
    </div>
  )
}

export default Footer
