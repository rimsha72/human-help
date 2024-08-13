import React, { useState } from 'react'
import { BiBell } from 'react-icons/bi'
import { Link } from 'react-router-dom';

export default function Header({ header }) {
  const [drop, setDrop] = useState(false);
  return (
    <div>
      <div className='bg-white' >
        <nav className="text-black">
          <div className="max-w-screen-2xl flex flex-wrap items-center justify-between px-4 py-9 sm:p-8">
            <div className="flex items-center drop-shadow-lg">
              <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap uppercase ">{header ? header : "Home"}</span>
            </div>
            <div className="relative" id="navbar-default">
              <div className='flex flex-row'>
                <div className='rounded-full drop-shadow-lg  flex justify-center items-center  mr-1 sm:mr-4 w-9 h-9'>
                  <BiBell className='w-7 h-7' />
                </div>
                <button type="button" className="flex text-sm rounded-full md:mr-0" onClick={e => setDrop(!drop)} >
                  <div className='flex items-center text-sm drop-shadow-lg'>
                    <img className='rounded-full drop sm:mr-2 w-9 h-9 object-cover' src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='profile' />
                    <span className='hidden sm:block'>Jane doe</span>
                  </div>
                </button>
              </div>
              {/* <div className="absolute items-center z-20"> */}
              <div className={`z-50 ${drop ? null : 'hidden'} absolute w-full px-4 my-4 text-base list-none bg-gray-200 divide-y divide-gray-100 rounded-lg shadow`}>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Profile</Link>
                  </li>
                  <li>
                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Log Out</a>
                  </li>
                </ul>
              </div>
              {/* </div> */}
            </div>
          </div>
          {/* <Notifications /> */}
        </nav>
      </div>
    </div>
  )
}
