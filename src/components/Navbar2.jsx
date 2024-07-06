import React from 'react';
import { FaBell } from 'react-icons/fa6';
import { Link } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <div className='pl-6 pr-11 py-2 shadow-[0_4px_8px_0px_rgba(0,0,0,0.04)]'>
        <div className="flex justify-between items-center">
        <div className="text-[#7FDBCA] text-2xl font-'Oxygen' leading-7">Room8s</div>
        <div className=" sm:flex justify-center items-center gap-4 ">
            <input className="flex-1 sm:w-88 lg:w-[711px] py-3 pl-3 pr-10 rounded-full border focus:outline-none focus:ring-1 focus:ring-[#7FDBCA] text-gray-500 text-sm font-normal font-['Acumin Pro'] leading-7" type='text' placeholder='Search for apartments.....' ></input>
        </div>
        <div className="justify-center items-center gap-2 inline-flex">
        <div className=" px-1 py-1.5 justify-center items-center gap-2.5 flex ">
            <FaBell/>
        </div>
        <div className=" bg-[#EAECF0] text-white p-3 rounded-full justify-center items-center gap-2.5 flex">
            <p className='font-white'>SC</p>
        </div>
        </div>
  </div>
</div>
  )
}

export default Navbar2