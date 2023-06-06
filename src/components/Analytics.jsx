import React from 'react'
import Laptop from '../assets/laptop.jpeg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4 '>
      <div className='md:max-w-[1000px] max-w-[300px] mx-auto grid md:grid-cols-2'>
        <img className='w-[400px] mx-auto my-4' src={Laptop} alt=''/>
        <div className='flex flex-col justify-center md:pl-4'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-2xl sm:text-xl text-1xl font-medium py-2'>Manage Data Analytics Centrally</h1>
          <p className='md:text-2xl sm:text-xl text-1xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est maiores provident animi deleniti, iusto esse veniam. Doloribus nulla consectetur placeat, quod inventore eaque neque ea, amet laudantium repudiandae reprehenderit totam?</p>
          <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
