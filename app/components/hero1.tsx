"use client"
import React from 'react';

import Image from 'next/image';

const Hero1 = () => {
  return (
    <div className='pt-4 lg:pt-10 mt-40'>
      <div className='px-[20px] lg:px-[280px] mb-10'>
        <h1 className='text-center pt-6 text-[#36485C] lg:text-[70px] lg:leading-7 mb-10'>For Seamless Onboarding &</h1>
        <p className='text-center text-[32px] font-Jost leading-[40px] font-extrabold text-green-800 lg:text-[64px] lg:leading-[72px] mb-10'>Property Management Experience</p>
        <h1 className='text-center font-Jost text-gray-400 text-[30px] font-normal leading-160 tracking-tighter mx-24'>Our commitment to innovation and customer satisfaction ensures that we are constantly improving and tailoring our software to meet the unique needs of the property management industry.</h1>

        <div className='gap-x-6 flex w-full justify-center pt-8'>
          <button className='bg-[#4328EB] w-1/2 lg:w-fit text-white py-4 px-8 rounded-[4px]'>
            Try for free
          </button>
        </div>
      </div>

   
    </div>
  )
}

export default Hero1;
