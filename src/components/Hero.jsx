import React from 'react'
import Typed from 'react-typed'

function Hero() {
  return (
    // change margin ...mt-96px
    <div className='text-white '>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH ANALYTICS</p>
        <h1 className='font-semibold md:text-5xl md:py-4 sm:text-4xl text-3xl'>Grow with Data</h1>
        <div className='flex justify-center'>
            <p className='md:text-3xl sm:text-2xl text-xl font-semibold'>Fast, Flexible Financing For</p>
            <Typed 
                className='md:text-3xl sm:text-2xl font-serif md:pl-2 pl-1'
                strings={['B2B','B2C','C2C']}
                typeSpeed={120}
                backSpeed={140}
                loop

            />
        </div>
        <p className='md:text-2xl text-xl font-semibold text-gray-500 pt-2 '>monitor your data analytics to increase your revenue for B2B, B2C & C2C platforms</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero
