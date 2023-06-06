import React from 'react'

function Newsletter() {
  return (
    <div className='w-full text-white py-12 px-4'>
        <div className='md:max-w-[1000px] max-w-[300px] mx-auto grid md:grid-cols-3'>
            <div className=' md:col-span-2 my-2'>
                <h1 className='font-bold md:text-2xl sm:text-xl text-1xl py-1'>Wants tips & tricks to optimize your flow? </h1>
                <p> Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4 md:my-0'> 
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type="text" placeholder='Enter your Email' className='p-1 flex w-full rounded-md text-black'/>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-black ml-4'>Notify Me</button>
                </div>
            <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
