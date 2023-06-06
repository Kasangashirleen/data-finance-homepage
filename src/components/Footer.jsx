import React from 'react'
import{
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

function Footer() {
  return (
    <div className='text-white md:max-w-[1000px] max-w-[300px] mx-auto py-12 px-4 grid lg:grid-cols-3 '>
      <div className='mx-8'>
        <h1 className='text-[#00df9a] font-bold text-xl'>REACT</h1>
        <p className='py-4 text-gray-300 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus dolorem soluta consectetur cupiditate velit facilis vel accusamus, consequuntur aut odit! Eius aliquid vero tenetur voluptatibus tempora recusandae quaerat, earum corrupti.</p>
        <div className='flex  my-6 md:w-[75%] w-[75%] justify-between'>
            <FaFacebookSquare size={20}/>
            <FaInstagram size={20}/>
            <FaTwitterSquare size={20}/>
            <FaGithubSquare size={20}/>
            <FaDribbbleSquare size={20}/>
        </div>
      </div>
      <div className='lg:col-span-2 col-span-1 flex  justify-between md:w-[85%] w-[100%] mx-8 mt-10'>
            <div className='md:text-sm text-xs'>
                <h6 className=' font-normal  text-gray-400'>Solutions</h6>
                <ul className='text-gray-200  py-1 font-light'>
                    <li>Analytics</li>
                    <li>Marketing</li>
                    <li>Commerce</li>
                    <li>Insights</li>
                </ul>
            </div>
            <div className='md:text-sm text-xs'>
                <h6 className=' font-normal text-gray-400'>Support</h6>
                <ul className='text-gray-200  py-1 font-light'>
                    <li>Pricing</li>
                    <li>Documentation</li>
                    <li>Guides</li>
                    <li>API Status</li>
                </ul>
            </div>
            <div className='md:text-sm text-xs'>
                <h6 className=' font-normal text-gray-400'>Company</h6>
                <ul className='text-gray-200 py-1 font-light'>
                    <li>About</li>
                    <li>Blogs</li>
                    <li>Jobs</li>
                    <li>Press</li>
                </ul>
            </div>
            <div className='md:text-sm text-xs'>
                <h6 className=' font-normal text-gray-400'>Legal</h6>
                <ul className='text-gray-200 py-1 font-light'>
                    <li>Claim</li>
                    <li>Policy</li>
                    <li>Terms</li>
                </ul>
            </div>
      </div>
    </div>
  )
}

export default Footer
