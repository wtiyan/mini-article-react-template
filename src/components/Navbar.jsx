import React, { useState } from 'react';
import { close, menu } from '../assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className='w-full h-[80px] z-10 bg-[#202E60] text-white drop-shadow-lg relative'>
      <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>

        <div className='flex items-center pl-4 md:pl-0'>
          <Link to={`/`}><h1 className='text-2xl font-bold cursor-pointer'>Mini Article</h1></Link>
        </div>

        <div className='hidden md:flex items-center space-x-6'>
          <ul className='flex space-x-6'>
            <li className='cursor-pointer transition-colors hover:text-[#1A9FDA]'><Link to={`/`}>Home</Link></li>
            <li className='cursor-pointer transition-colors hover:text-[#1A9FDA]'><Link to={`/categories`}>Categories</Link></li>
          </ul>
        </div>

        <div className='hidden md:flex items-center space-x-6'>
          <Link to={`/login`}><button className='border-none bg-transparent text-white mr-4 transition-colors hover:text-[#1A9FDA]'>Login</button></Link>
          <Link to={`/registration`}><button className='px-6 py-2 bg-[#0C7AAE] rounded-md transition-all hover:bg-[#0e91cf] hover:text-white'>Register</button></Link>
        </div>

        <div className='md:hidden' onClick={handleClick}>
          <img src={!toggle ? menu : close} alt="menu" className='w-[28px] h-[28px] object-contain mr-10' />
        </div>

      </div>
      <ul className={toggle ? 'absolute bg-white w-full px-8 md:hidden' : 'hidden'}>
        <li className='text-black transition-colors hover:text-[#1A9FDA]'><Link to={`/`}>Home</Link></li>
        <li className='text-black transition-colors hover:text-[#1A9FDA]'><Link to={`/categories`}>Categories</Link></li>
        <div className='flex flex-col my-4'>
          <Link to={`/login`}><button className='bg-transparent text-black mb-4 py-3 px-8 transition-colors hover:text-[#1A9FDA]'>Login</button></Link>
          <Link to={`/registration`}><button className='px-8 py-3 transition-all bg-[#0C7AAE] hover:bg-[#0e91cf] hover:text-white'>Register</button></Link>
        </div>
      </ul>
    </div>
  )
}

export default Navbar;
