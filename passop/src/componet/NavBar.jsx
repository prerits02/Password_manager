import React from 'react'

const NavBar = () => {
  return (
    <nav className='bg-slate-800 flex justify-around items-center px-4 h-14 text-white'>
        <div className='logo font-bold'>
          <span className='text-green-600'>&lt;</span>
          Pass
          <span className='text-green-600'>OP/&gt;</span>
          </div>
      <ul>
        <li className='flex gap-4'>
            <a className='hover:font-bold' href="#">Home</a>
            <a className='hover:font-bold' href='#'>about</a>
            <a className='hover:font-bold' href='#'>contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
