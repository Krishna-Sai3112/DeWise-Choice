"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn,signOut } from 'next-auth/react'
import { Aref_Ruqaa_Ink } from 'next/font/google'
import Github from 'next-auth/providers/github'

const page = () => {

  const { data: session } = useSession()

  return (
    <div className='flex flexcol w-full h-[80vh] justify-center items-center'>
      <div id="maincard" className='bg-slate-200 rounded-xl'>
        <div className="sidegap my-8 mx-8 flex flex-col">
          <span className='text-2xl self-center mb-4 font-bold'>Login to your Account</span>
          <div>
            <button className='flex gap-3 my-2 py-2 px-4 font-semibold bg-white border border-gray-800 hover:bg-neutral-200 rounded-md items-center w-full justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 50 50">
              <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
            </svg>
            <span>Continue with Google</span>
            </button>
            <button onClick={()=>{signIn("github")}} className='flex gap-3 my-2 py-2 px-4 font-semibold bg-white border border-gray-800 hover:bg-neutral-200 rounded-md items-center w-full justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 64 64">
              <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
            </svg>
              <span>Continue with GitHub</span>
            </button>
          </div>
          <br />
          <span className='font-bold self-center'>OR</span>
          <br />
          <div id='detils' className='w-full'> 
            <div id='mailid' className='w-full my-2 flex items-center'>
              <span className='font-semibold w-[80px]'>Email ID:</span>
              <input className='border border-black rounded-md h-[30px] w-[250px]' type="email" />
            </div>
            <div id='password' className='w-full my-2'>
              <span className='font-semibold w-[80px]'>Password:</span>
              <input className='border border-black rounded-md h-[30px] w-[250px]' type="password" />
            </div>
          </div>  
          <button className='py-2 px-4 bg-orange-300 font-semibold rounded-lg mt-3 self-center' type='submit'>Continue</button>
          <br />
          <div className='self-center'>
            <span>Don't have an Account?</span>
            <Link href={"/signup"} className='font-semibold text-blue-700 underline'>SignUp</Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default page
