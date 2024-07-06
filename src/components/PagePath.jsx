import React from 'react'
import { BiChevronRight } from 'react-icons/bi';
import {   FaArrowRight} from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const PagePath = ({ apartmentName = '' }) => {
  return (
    <div className='ml-10 mt-5 flex text-lg justify-start items-center'>
        <p className='mr-2'><Link to="/">Home</Link></p>
       <BiChevronRight className='size-7 colo'/>

        <p className='mr-2'><Link to="/apartments">Product</Link></p>
        <BiChevronRight className='size-7 colo'/>
        <p className='mr-2 text-pry-color'>{apartmentName}</p>
    </div>
  )
}

export default PagePath