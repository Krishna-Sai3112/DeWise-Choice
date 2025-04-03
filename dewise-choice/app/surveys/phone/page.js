import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex flex-col w-[100vw] h-[79vh] items-center justify-center'>
      <div className='flex flex-col w-[50%] h-[50%] bg-red-200 text-gray-950 py-5 px-5 gap-5 rounded-lg items-center'>
        <span>The survey will consist of 6 basic questions. </span>
        <span>Answer them and we will recommend the device that suits you the best</span>
        <Link href={"/surveys/phone/Q1"} className='px-5 py-3 bg-slate-800 rounded-md font-semibold'>Start</Link>
      </div>
    </div>
  )
}

export default page
