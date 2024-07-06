import React from 'react'
import image from "../assets/Images/userpic.png"

const RecentActivities = ({data}) => {
  return (
    <div className="w-full md:w-2/5 p-4 mt-36">
    <div className="bg-white p-4 rounded shadow-md">
      <div className='flex justify-between items-center gap-4 mb-4'>
        <h2 className="text-base leading-6 font-semibold font-outfit">Recent Activity</h2>
        <p className="text-sm leading-6 font-normal font-inter">{data.time}</p>
      </div>
      <ul>
        {data.recentActivities.map((activity, index) => (
          <li key={index} className="flex items-center justify-between py-2 border-b border-gray-200">
            <div className="flex items-center">
              <img src={image} alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
              <div>
                <p className="text-base leading-4 font-medium font-inter mb-2">{activity.name}</p>
                <p className="text-gray-600 text-sm leading-4 font-normal font-inter">{activity.action}</p>
              </div>
            </div>

          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default RecentActivities