import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import logo from "../assets/ecom-logo.png"
import { useSelector } from 'react-redux';

const Navbar = () => {

  const {cart} = useSelector((state) => state)

  return (
    <div>
      <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
          <NavLink to="/">
            <div className='ml-2 py-1 select-none'>
              <img src={logo} alt='logo' className='w-[100px] md:w-[150px] ml-5 md:ml-0'  />
            </div>
          </NavLink>

          <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
              <NavLink to="/">
                <p>Home</p>
              </NavLink>

              <NavLink to="/cart">
                  <div className='relative'>
                    <FaCartShopping className='text-2xl md:text-2xl' />
                    {
                      cart.length > 0 &&
                      <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>
                        {cart.length}
                      </span>
                    }
                  </div>
              </NavLink>
            </div>
      </nav>
    </div>
  )
}

export default Navbar
