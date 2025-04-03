import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <div>
      Click here to see the suggestions
      <Link href={"/surveys/phone/suggestions"} className='p-5 bg-white text-black'>See Suggestions</Link>
    </div>
  )
}

export default page
