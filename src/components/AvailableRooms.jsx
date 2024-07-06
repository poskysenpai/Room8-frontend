import React from 'react'
import { Link } from 'react-router-dom'

const AvailableRooms = () => {
  return (
    <div className='mb-20 px-5 lg:px-10'>
        <p className='text-xl md:text-3xl font-bold leading-7 mb-5'>AVAILABLE ROOMS</p>
        <div className='flex flex-wrap  gap-5'>
            <div className='flex flex-col justify-center p-8 rounded-xl border border-gray-300'>
                <div><img src="./src/assets/Images/Rectangle 69.png" alt="" srcSet="" /></div>
                <div className='p-3 text-lg'>
                    <p className='font-bold text-xl mb-3'>Features</p>
                    <p className='mb-2'>Medium-sized bathroom available</p>
                    <p className='mb-8'>24/7 light (backed up by generator) </p>
                    <Link className='bg-pry-color text-white px-7 py-4 text-base rounded-full' to="/">Start a Chat</Link>
                </div>
            </div>
            <div className='flex flex-col justify-center p-8 rounded-xl border border-gray-300'>
                <div><img src="./src/assets/Images/Rectangle 69.png" alt="" srcSet="" /></div>
                <div className='p-3 text-lg'>
                    <p className='font-bold text-xl mb-3'>Features</p>
                    <p className='mb-2'>Medium-sized bathroom available</p>
                    <p className='mb-8'>24/7 light (backed up by generator) </p>
                    <Link className='bg-pry-color text-white px-7 py-4 text-base rounded-full' to="/">Start a Chat</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AvailableRooms