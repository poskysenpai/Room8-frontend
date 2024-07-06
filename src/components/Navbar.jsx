import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { getUser } = useAuth();
  const user = getUser();
  return (
    <div className='pl-6 pr-11 py-2 shadow-[0_4px_8px_0px_rgba(0,0,0,0.04)]'>
        <div className="flex justify-between items-center">
        <div className="text-[#7FDBCA] font-bold text-2xl font-Oxygen leading-7">Room8s</div>
        <div className="hidden sm:flex justify-center items-center gap-4 ">
          <div className="text-black text-base font-normal font-['Acumin Pro'] leading-7">Home</div>
          <div className="text-black text-base font-normal font-['Acumin Pro'] leading-7">About Us</div>
          <div className="text-black text-base font-normal font-['Acumin Pro'] leading-7">Services </div>
        </div>
        <div className={`justify-center items-center gap-2 inline-flex ${user ? 'hidden' : ''}`}>
          <Link to="/login" className="px-6 py-1.5 border rounded-full border-pry-color hover:border-teal-500 hover:text-teal-500 text-pry-color text-base font-normal font-['Acumin Pro'] leading-7">Log In</Link>
          <Link to="/signup" className="bg-pry-color hover:bg-teal-500 rounded-full px-6 py-1.5 text-white text-base font-normal font-['Acumin Pro'] leading-7">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
