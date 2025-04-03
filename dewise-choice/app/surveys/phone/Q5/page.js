"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useValues } from '@/app/context/ValuesContext'

const page = () => {

  const router = useRouter();
  const { updateValue } = useValues();

  const [selectedResponse, setSelectedResponse] = useState('4');

  const handleResponseChange = (e) => {
      setSelectedResponse(e.target.value);
      // console.log(selectedResponse);
      
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      const value = selectedResponse;
      updateValue('med', value);
      router.push('/surveys/phone/Q6');
  }


  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="w-[1000px] h-[500px] px-8 py-5 bg-slate-700 text-white rounded-xl flex justify-center items-center">
        <div
          id="question"
          className="w-[30%] h-full flex flex-col items-center justify-center"
        >
          <span className="text-2xl font-semibold">How often do you consume video content on your phone?</span>
        </div>

        <form onSubmit={handleSubmit} className="flex w-[70%] h-full">
          <div className="w-[70%] h-full flex">
            <div className="w-full h-full flex flex-col justify-around pl-10 py-10">
              <div className="flex gap-2">
                <input type="radio" name="media" value='1' className="w-5 h-5" onChange={handleResponseChange} />
                <span>Regularly watch movies and TV shows</span>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="media" value='2' className="w-5 h-5" onChange={handleResponseChange} />
                <span>Often watch YouTube and social media videos</span>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="media" value='3' className="w-5 h-5" onChange={handleResponseChange} />
                <span>Sometimes</span>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="media" value='4' className="w-5 h-5" onChange={handleResponseChange} />
                <span>Rarely</span>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-full flex flex-col justify-center gap-y-10">
            {/* <Link
              href={"/surveys/phone/Q6"}
              className="flex justify-center py-2 bg-slate-800 rounded-md"
            > */}
              <button type='submit' className='flex justify-center py-2 bg-slate-800 rounded-md'>
                Next
              </button>
            {/* </Link> */}
            <Link
              href={"/surveys/phone/Q6"}
              className="flex justify-center py-2 bg-slate-800 rounded-md"
            >
              Skip
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page