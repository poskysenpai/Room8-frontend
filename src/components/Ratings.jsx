import React from 'react'

const Ratings = ({data}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-24 h-20'>

            <div className='bg-white p-4 rounded shadow-md mt-3'>
                <div className='ml-2'>
                    <h2 className='text-gray-600 font-normal leading-4 font-bold font-inter text-xs mb-3'>Total Listing made</h2>
                    <p className="text-3xl font-inter leading-4 font-semibold">{data.totalListings}</p>
                </div>
                <div className='border-t mt-12'>
                    <a href="#" className="text-customTeal font-normal text-xs leading-5 mt-2 float-right font-inter">View report</a>
                </div>
            </div>

            <div className="bg-white p-4 rounded shadow-md mt-3">
                <div className='ml-2'>
                    <h2 className="text-gray-600 font-normal leading-4 font-bold text-xs mb-3">Total Tenants</h2>
                    <p className="text-3xl font-inter leading-4 font-semibold">{data.totalTenants}</p>
                </div>
                <div className='border-t mt-12'>
                    <a href="#" className="text-customTeal font-normal text-xs leading-5 mt-2 float-right font-inter">View report</a>
                </div>
            </div>

            <div className="bg-white p-4 rounded shadow-md mt-3">
                <div className='ml-2'>
                    <h2 className="text-gray-600 font-normal leading-4 text-xs font-bold mb-3">Support Tickets</h2>
                    <p className="text-3xl font-inter leading-4 font-semibold">{data.supportTickets}</p>
                </div>
                <div className='border-t mt-12'>
                    <a href="#" className="text-customTeal font-normal text-xs leading-5 mt-2 float-right font-inter">View report</a>
                </div>
            </div>
        </div>
    )
}

export default Ratings