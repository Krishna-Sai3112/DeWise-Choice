"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useValues } from '@/app/context/ValuesContext'

const page = () => {

    const router = useRouter();
    const { updateValue } = useValues();

    const [selectedBudget, setSelectedBudget] = useState('8');

    const handleBudgetChange = (e) => {
        setSelectedBudget(e.target.value);
        // console.log(selectedBudget);
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const value = selectedBudget;
        updateValue('budget', value);
        router.push('/surveys/phone/Q2');
    }


  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="w-[1000px] h-[500px] px-8 py-5 bg-slate-700 text-white rounded-xl flex justify-center items-center">
        <div
          id="question"
          className="w-[30%] h-full flex flex-col items-center justify-center"
        >
          <span className="text-2xl font-semibold">What is your Budget?</span>
        </div>

        <form onSubmit={handleSubmit} className="flex w-[70%] h-full">
          <div className="w-[70%] h-full flex">
            <div className="w-[50%] h-full flex flex-col justify-around pl-10 py-10">
              <div className="flex gap-2">
                <input type="radio" name="budget" value='1' className="w-5 h-5" onChange={handleBudgetChange} />
                <span>Below 10,000</span>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="budget" value='2' className="w-5 h-5" onChange={handleBudgetChange} />
                <span>10,000 - 15,000</span>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="budget" value='3' className="w-5 h-5" onChange={handleBudgetChange} />
                <span>15,000 - 20,000</span>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="budget" value='4' className="w-5 h-5" onChange={handleBudgetChange} />
                <span>20,000 - 25,000</span>
              </div>
            </div>
            <div className="w-[50%] h-full flex flex-col justify-around pl-10 py-10">
              <div className="flex gap-2">
                <input type="radio" name="budget" value='5' className="w-5 h-5" onChange={handleBudgetChange} />
                <span>25,000 - 30,000</span>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="budget" value='6' className="w-5 h-5" onChange={handleBudgetChange} />
                <span>30,000 - 40,000</span>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="budget" value='7' className="w-5 h-5" onChange={handleBudgetChange} />
                <span>40,000 - 80,000</span>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="budget" value='8' className="w-5 h-5" onChange={handleBudgetChange} />
                <span>No Budget Limit</span>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-full flex flex-col justify-center gap-y-10">
            {/* <Link
              href={"/surveys/phone/Q2"}
              className="flex justify-center py-2 bg-slate-800 rounded-md"
            > */}
              <button type='submit' className='flex justify-center py-2 bg-slate-800 rounded-md'>
                Next
              </button>
            {/* </Link> */}
            <Link
              href={"/surveys/phone/Q2"}
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
