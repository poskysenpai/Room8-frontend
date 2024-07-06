import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addToSaved } from '../services/apartment/ApartmentService';

const AptDescription = ({ apartmentId = 0, noOfBeds = 0, address = "", rent = 0, ownerId = "", ownerName = "", ownerEmail="", ownerPhone=""}) => {
    async function addToSavedApartments(){
        await addToSaved(apartmentId);
    }
  return (
    <div className='my-16 ml-5 p-5 flex-col'>
                <div className='flex justify-between w-full mb-22 '>
                    <div className='w-full h-[134px]  flex flex-col justify-between '>
                        <div className='w-full font-bold md:text-3xl md:leading-[48px] '><p > {noOfBeds} Bedroom Flat, {address}</p></div>
                        <div className='w-full font-normal leading-[30px] text-pry-color'><p > 2 rooms available</p></div>
                        <div className='w-full font-semibold md:text-2xl leading-[28px]'><p > N{rent}</p></div>
                    </div>
                    <div className='flex justify-end w-full  border-[#7FDBCA] items-start gap-2.5 '>
                        <button onClick={addToSavedApartments} className='border-2 bg-pry-color hover:bg-teal-500 rounded-full px-2 md:px-6 py-2 border-[#7FDBCe] text-white'> Add to Wishlist</button>
                    </div>
                </div>
                <div className=' md:flex  justify-between sm:my-6 space-y-3 md:space-x-0 '>
                        <div>
                            <p className='font-bold md:text-2xl my-2 md:mb-6'>FEATURES</p>

                            <div className='flex gap-3 sm:justify-between md:flex-col '>
                                <div className='opacity-45 space-y-2  text-sm md:text-base'>
                                    <div className=' flex'> <div className='mr-1'><img src="./src/assets/Images/profile.png" alt="" srcSet="" /> </div> Female Roommates Only</div>
                                    <div className=' flex'> <div className='mr-2 ml-1'> <img src="./src/assets/Images/Layer 8.png" alt="" srcSet="" /></div>   4 Bathrooms rooms</div>
                                    <div className=' flex'> <div className='mr-1'> <img src="./src/assets/Images/Bed.png" alt="" srcSet="" /> </div>  4 bedrooms </div>
                                    <div className='flex'><div className='mr-2'><img src="./src/assets/Images/building.png" alt="" srcSet="" /></div>  Secured estate</div>
                                </div>
                                <div className='opacity-45 space-y-2 text-sm md:text-base'>
                                    <div className='flex'><div className='mr-2'><img src="./src/assets/Images/building.png" alt="" srcSet="" /></div> Self - serviced apartment</div>
                                    <div className='flex'> <div className='mr-1'><img src="./src/assets/Images/Secured.png" alt="" srcSet="" /></div>  24/7 light backed up by generator</div>
                                    <div className='flex'> <div className='mr-1'><img  src="./src/assets/Images/swimming.png" alt="" srcSet="" /></div>  Swimming pool</div>
                                    <div className='flex'><div className='mr-2 ml-1'><img src="./src/assets/Images/Vector.png" alt="" srcSet="" /> </div> Fully/partly furnished</div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='flex-col justify-between'>
                            <div className='flex-col mb-6 space-y-2  '>
                                <p className='font-bold md:text-2xl mb-2'>PRICES</p>
                                <div className='flex-col space-y-2 opacity-45 font-normal text-lg'>
                                <p className='text-sm md:text-base'>Base rent: N1.5m - 1m</p>
                                <p className='text-sm md:text-base'>Service Charge : N30,000</p>
                                </div>
                            </div>
                            <div className=' text-left ' >
                                <p className='font-bold md:text-2xl mb-3'> MEET THE REALTOR</p>
                                <div className='flex  w-full'>
                                        <div className='mr-2 flex justify-start items-center'><img className="size-20 md:size-30" src="./src/assets/Images/realtorpic.png" alt="" srcSet="" /></div>
                                        <div className='flex-col text-sm  md:text-xl md:space-y-2'>
                                            <p className=' md:text-xl mb-1 '>{ownerName}</p>
                                            <p>{ownerEmail}</p>
                                            <p className=' flex text-[#219653] hover:text-green-950'> <Link className='flex border p-1  border-[currentColor] rounded-full w-26' to={`/messages?ownerId=${ownerId}`}> <img className='ml-1 mr-3 size-5 md:size-7' src="./src/assets/Images/chat.png" alt="" />  Start chat</Link></p>
                                            <p>Contact: {ownerPhone}</p>
                                        </div>
                                </div>
                            </div>
                        <div>
                </div>
                </div>
                </div>
    </div>
  )
}

export default AptDescription