"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useValues } from '@/app/context/ValuesContext'

const page = () => {

  const router = useRouter();
  const { updateValue } = useValues();

  const [selectedResponse, setSelectedResponse] = useState('0');

  const handleResponseChange = (e) => {
      setSelectedResponse(e.target.value);
      // console.log(selectedResponse);
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      const value = selectedResponse;
      updateValue('imp', value);
      router.push('/surveys/phone/suggestions');
  }


  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="w-[1000px] h-[500px] px-8 py-5 bg-slate-700 text-white rounded-xl flex justify-center items-center">
        <div
          id="question"
          className="w-[30%] h-full flex flex-col items-center justify-center"
        >
          <span className="text-2xl font-semibold">What is your highest preference in a phone?</span>
        </div>

        <form onSubmit={handleSubmit} className="flex w-[70%] h-full">
          <div className="w-[70%] h-full flex">
            <div className="w-full h-full flex flex-col justify-around pl-10 py-10">
              <div className="flex gap-2">
                <input type="radio" name="imp" value='1' className="w-5 h-5" onChange={handleResponseChange} />
                <span>Design</span>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="imp" value='2' className="w-5 h-5" onChange={handleResponseChange} />
                <span>Camera</span>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="imp" value='3' className="w-5 h-5" onChange={handleResponseChange} />
                <span>Performnce</span>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="imp" value='4' className="w-5 h-5" onChange={handleResponseChange} />
                <span>Display,Speakers and battery</span>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="imp" value='5' className="w-5 h-5" onChange={handleResponseChange} />
                <span>Software Support and Update cycle</span>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-full flex flex-col justify-center gap-y-10">
            {/* <Link
              href={"/surveys/phone/suggestions"}
              className="flex justify-center py-2 bg-slate-800 rounded-md"
            > */}
              <button type='submit' className='flex justify-center py-2 bg-slate-800 rounded-md'>
                Submit
              </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default page