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
      updateValue('sware', value);
      router.push('/surveys/phone/Q7');
  }


  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="w-[1000px] h-[500px] px-8 py-5 bg-slate-700 text-white rounded-xl flex justify-center items-center">
        <div
          id="question"
          className="w-[30%] h-full flex flex-col items-center justify-center"
        >
          <span className="text-2xl font-semibold">How long are you expexted to you phone?</span>
        </div>

        <form onSubmit={handleSubmit} className="flex w-[70%] h-full">
          <div className="w-[70%] h-full flex">
            <div className="w-full h-full flex flex-col justify-around pl-10 py-10">
              <div className="flex gap-2">
                <input type="radio" name="software" value='1' className="w-5 h-5" onChange={handleResponseChange} />
                <span>More than 4 Years</span>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="software" value='2' className="w-5 h-5" onChange={handleResponseChange} />
                <span>Around 3-4 Years</span>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="software" value='3' className="w-5 h-5" onChange={handleResponseChange} />
                <span>Around 2 years</span>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="software" value='4' className="w-5 h-5" onChange={handleResponseChange} />
                <span>I change my phone every year</span>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-full flex flex-col justify-center gap-y-10">
            {/* <Link
              href={"/surveys/phone/suggestions"}
              className="flex justify-center py-2 bg-slate-800 rounded-md"
            > */}
              <button type='submit' className='flex justify-center py-2 bg-slate-800 rounded-md'>
                Next
              </button>
            {/* </Link> */}
            <Link
              href={"/surveys/phone/Q7"}
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