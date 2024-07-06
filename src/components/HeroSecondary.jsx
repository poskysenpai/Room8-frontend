import React from 'react'
import { Link } from 'react-router-dom'

function HeroSecondary() {
  return (
    <div className='p-10'>
        <div className="md:flex justify-between items-center gap-10">
            <div className='order-first md:order-last basis-1/2 mb-10'>
                <img className='w-full h-full object-cover border-none rounded' src='https://s3-alpha-sig.figma.com/img/d76c/f830/76e416252289be2061e031be6be5ac3b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jABUnJIkzZwRWNWzHt2aX8wrvMFRJwTLp1p6k-Ba9ldxNRJ2y-YOc94QDZW9eIqdLA1muWmxUBUGxkQ58I~Coi0XQJCVyMC8DrBeqjDFdm8GuOLoz0XtcdqFF68nXj3gyYtFvr4ZChkRPA7~BbU7vKdGJLTJyXztFHy98gVpT3dQlsUhBSLood1LlhKnF9rLPkBEtXDgLpow-raqkPULjWXlmFgI5uddKVLwpVTNsXxTBMXKedbsQM2UJu8WWUScGeJ8LDnotL7fezAq2QxuT3N7p1TmiWQZbATNA-vlPy8tySeXhonJCTFLo8XrziMAo5cFojT8G8tUu~yFsvExDg__'/>
            </div>
            <div className='basis-1/2 flex-col'>
                <div className="mb-5 text-zinc-900 text-4xl font-bold font-['Figtree'] leading-10">Effortless Roommate Connections, <br/>Lasting Friendships</div>
                <div className="mb-5 text-gray-500 text-base font-normal font-['Acumin Pro'] leading-7">Never Pay Retail Again - Find great discounts on pre-owned items. Trade Your Way - Barter for goods and services on our platform.</div>
                <Link to="/apartments" className="my-5 hover:cursor-pointer px-32 py-3.5 bg-pry-color hover:bg-teal-500 rounded-full border text-white text-base font-bold font-['Acumin Pro'] leading-normal">Search </Link>
            </div>
            
        </div>
    </div>
  )
}

export default HeroSecondary