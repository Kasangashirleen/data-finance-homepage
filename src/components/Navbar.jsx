import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
      setNav(prevState => !prevState)
  }

  return (
    <div className= ' flex justify-between items-center md:max-w-[1100px] w-[75%] max-w-[400px] mx-auto px-8 h-24 text-white '>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React</h1>
      {/* the list is hidden but shows past md */}
      <ul className='hidden md:flex'>
        <li className=' p-4'>Home</li>
        <li className=' p-4'>Company</li>
        <li className=' p-4'>Resources</li>
        <li className=' p-4'>About</li> 
        <li className=' p-4'>Contacts</li>
      </ul>
      {/* only appears on small screens, below the md 
      it is hidden past the md
      */}
      <div onClick={handleNav} className='block md:hidden' >

        {/* {!nav ? <AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/>} */}
        {!nav ? <AiOutlineMenu size={20}/>: <AiOutlineClose size={20}/>}
      </div>

      {/* <div className={!nav ? 'fixed left-0 top-0  h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500': 'fixed left-[-100%]'}> */}
      <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0  h-full w-[40%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>React</h1>
        <ul className=' pt-4 '>
          <li className=' p-4 border-b border-b-gray-600'>Home</li>
          <li className=' p-4 border-b border-b-gray-600'>Company</li>
          <li className=' p-4 border-b border-b-gray-600'>Resources</li>
          <li className=' p-4 border-b border-b-gray-600'>About</li> 
          <li className=' p-4 border-b border-b-gray-600'>Contacts</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
