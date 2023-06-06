import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Cards() {
  return (
    <div className='bg-white w-full py-[10rem] px-4'>
      <div className='md:max-w-[1000px] max-w-[300px] mx-auto grid md:grid-cols-3 gap-6'>
            <div className='w-full shadow-xl flex flex-col p-2 rounded-lg md:bg-gray-100 hover:scale-105 duration-100'>
                <img src={Single} alt="" className='w-20 mx-auto mt-[-3rem] bg-ransparent' />
                <h2 className='text-center font-semibold py-3 text-xl '>Single User</h2>
                <p className='text-center font-bold text-xl'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-1 border-b  border-b-gray-400 mx-4 '>1 Granted User</p>
                    <p className='py-1 border-b  border-b-gray-400 mx-4 '>Send up to 2 GB</p>
                    <p className='py-1 border-b  border-b-gray-400 mx-4 '>500 GB Storage</p>
                    <button className='bg-black rounded-md font-medium my-6 mx-auto px-6 py-1 text-[#00df9a]'>Start Trial</button>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-2 rounded-lg md:my-0 my-8 bg-gray-200 hover:scale-105 duration-100'>
                <img src={Double}alt="" className='w-20 mx-auto mt-[-3rem] bg-transparent'/>
                <h2 className='text-center font-semibold py-3 text-xl '>Partneship</h2>
                <p className='text-center font-bold text-xl'>$199</p>
                <div className='text-center font-medium'>
                    <p className='py-1 border-b border-b-gray-400 mx-4 '>1 Granted User</p>
                    <p className='py-1 border-b border-b-gray-400 mx-4 '>Send up to 2 GB</p>
                    <p className='py-1 border-b border-b-gray-400 mx-4 '>500 GB Storage</p>
                    <button className='bg-black rounded-md font-medium my-6 mx-auto px-6 py-1 text-[#00df9a]'>Start Trial</button>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-2 rounded-lg md:bg-gray-300 hover:scale-105 duration-100'>
                <img src={Triple} alt="" className='w-20 mx-auto mt-[-3rem]'/>
                <h2 className='text-center font-semibold py-3 text-xl '>Group Account</h2>
                <p className='text-center font-bold text-xl'>$299</p>
                <div className='text-center font-medium'>
                    <p className='py-1 border-b  border-b-gray-500 mx-4 '>1 Granted User</p>
                    <p className='py-1 border-b  border-b-gray-500 mx-4 '>Send up to 2 GB</p>
                    <p className='py-1 border-b  border-b-gray-500 mx-4 '>500 GB Storage</p>
                    <button className='bg-black rounded-md font-medium my-6 mx-auto px-6 py-1 text-[#00df9a]'>Start Trial</button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Cards
