import { SlHome } from 'react-icons/sl'
import { RiCloseFill, RiCoupon3Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { useState } from 'react'
import logo from "../../assets/logo2.svg"
import { TbBrandFunimation } from "react-icons/tb";
import { FaUsers } from 'react-icons/fa';
import { BsCart2 } from 'react-icons/bs';
import { IoBagCheckOutline, IoLogOutOutline, IoSettings } from 'react-icons/io5';
export default function Sidebar() {
  const [showMenue, setShowMenue] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  return (
    <>
      <div className='bg-gradient-to-r from-blue-150 from- to-blue-150'>
        <button type="button" onClick={e => setShowMenue(true)} className="flex items-center p-2 ml-3 border-0 text-sm text-gray-50 rounded-lg lg:hidden hover:bg-gray-100">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6  h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>
      </div>

      <aside className={`fixed top-0 left-0 z-40 w-64 bg-gradient-to-b from-blue-150 from- to-blue-150 h-screen ${showMenue ? null : `hidden`} lg:block`} aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto">
          {showMenue &&
            <button className='float-right text-xl text-black' onClick={e => setShowMenue(false)}>
              <RiCloseFill />
            </button>
          }
          <ul className="space-y-2  font-normal text-base">
            <li className='py-3 pb-6'>
              <Link to='/' className="flex items-center justify-center py-2 px-5 rounded-lg">
                <img src={logo} alt='....' className='object-cover drop-shadow-lg' />
              </Link>
            </li>
            <li onClick={e => setShowMenue(pre => false)}>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "flex items-center py-3 px-5 rounded-lg bg-white drop-shadow text-black font-semibold"
                    :
                    "flex items-center py-3 px-5 text-white rounded-lg hover:bg-white/20 hover:text-white hover:font-medium"
                }
              >
                <SlHome />
                <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
              </NavLink>
            </li>
            <li onClick={e => setShowMenue(pre => false)}>
              <NavLink
                to='/sellers'
                className={({ isActive, isPending }) => {
                  setDropDown(isActive)
                  return (
                    isActive ? "flex items-center py-3 px-5 rounded-lg bg-white drop-shadow text-black font-semibold"
                      :
                      "flex items-center py-3 px-5 text-white rounded-lg hover:bg-white/20 hover:text-white hover:font-medium"
                  )
                }}
              >
                <FaUsers />
                <span className="flex-1 ml-3 whitespace-nowrap">Manage Sellers</span>
              </NavLink>

            </li>
            <li onClick={e => setShowMenue(pre => false)}>
              <NavLink
                to='/products'
                className={({ isActive, isPending }) => {
                  setDropDown(isActive)
                  return (
                    isActive ? "flex items-center py-3 px-5 rounded-lg bg-white drop-shadow text-black font-semibold"
                      :
                      "flex items-center py-3 px-5 text-white rounded-lg hover:bg-white/20 hover:text-white hover:font-medium"
                  )
                }}
              >
                <BsCart2 />
                <span className="flex-1 ml-3 whitespace-nowrap">Manage Products</span>
              </NavLink>

            </li>
            <li onClick={e => setShowMenue(pre => false)}>
              <NavLink
                to='/orders'
                className={({ isActive, isPending }) => {
                  setDropDown(isActive)
                  return (
                    isActive ? "flex items-center py-3 px-5 rounded-lg bg-white drop-shadow text-black font-semibold"
                      :
                      "flex items-center py-3 px-5 text-white rounded-lg hover:bg-white/20 drop-shadow hover:text-white hover:font-medium"
                  )
                }}
              >
                <IoBagCheckOutline />
                <span className="flex-1 ml-3 whitespace-nowrap">Manage Orders</span>
              </NavLink>

            </li>
            <li onClick={e => setShowMenue(pre => false)}>
              <NavLink
                to='/feedbacks'
                className={({ isActive, isPending }) => {
                  setDropDown(isActive)
                  return (
                    isActive ? "flex items-center py-3 px-5 rounded-lg bg-white drop-shadow text-black font-semibold"
                      :
                      "flex items-center py-3 px-5 text-white rounded-lg hover:bg-white/20 drop-shadow hover:text-white hover:font-medium"
                  )
                }}
              >
                <TbBrandFunimation />
                <span className="flex-1 ml-3 whitespace-nowrap">Manage Feedbacks</span>
              </NavLink>

            </li> 
            <li onClick={e => setShowMenue(pre => false)}>
              <NavLink
                to='/settings'
                className={({ isActive, isPending }) => {
                  setDropDown(isActive)
                  return (
                    isActive ? "flex items-center py-3 px-5 rounded-lg bg-white drop-shadow text-black font-semibold"
                      :
                      "flex items-center py-3 px-5 text-white rounded-lg hover:bg-white/20 drop-shadow hover:text-white hover:font-medium"
                  )
                }}
              >
                <IoSettings />
                <span className="flex-1 ml-3 whitespace-nowrap">App Settings</span>
              </NavLink>

            </li> 
            <li onClick={e => setShowMenue(pre => false)}>
              <NavLink
                to='/login'
                className={({ isActive, isPending }) => {
                  setDropDown(isActive)
                  return (
                    isActive ? "flex items-center py-3 px-5 rounded-lg bg-white drop-shadow text-black font-semibold"
                      :
                      "flex items-center py-3 px-5 text-white rounded-lg hover:bg-white/20 drop-shadow hover:text-white hover:font-medium"
                  )
                }}
              >
                <IoLogOutOutline />
                <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
              </NavLink>

            </li>
          </ul>

        </div>
      </aside>

    </>
  )
}
