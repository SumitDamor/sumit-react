import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'


const NavBar = () => {

  return (
    <>
        <header className='flex justify-between items-center w-screen p-5 text-xl bg-black font-bold text-white'>
                <h1>Sumit</h1>
                <div>
                    <nav>
                        <NavLink exact className='mx-2' activeClassName='active_class' to="/">Home</NavLink>
                        <NavLink exact className='mx-2' activeClassName='active_class' to="/services">Services</NavLink>
                        <NavLink exact className='mx-2' activeClassName='active_class' to="/about">About Us</NavLink>
                        <NavLink exact className='mx-2' activeClassName='active_class' to="/contact">Contact Us</NavLink>
                        <NavLink exact className='mx-2' activeClassName='active_class' to="/search">Search</NavLink>
                    </nav>
                </div>
        </header>
    </>
  )
}

export default NavBar