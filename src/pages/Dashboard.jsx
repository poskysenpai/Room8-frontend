import React, { useState, useRef, useEffect } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import AdminDashboardNav from '../components/AdminDashboardNav';
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';
import RecentActivities from '../components/RecentActivities';
import Ratings from '../components/Ratings';
ChartJS.register(...registerables);

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    "user": {
      "name": "Samuel Carter"
    },
    "totalListings": 100,
    "totalTenants": 1200,
    "supportTickets": 500,
    "income": {
      "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      "data": [20, 50, 70, 40, 90, 30]
    },
    "statistics": {
      "highest": 280,
      "lowest": 230
    },
    "time": "Today",
    "recentActivities": [
      {
        "name": "Olachi Iwuagwu",
        "action": "Created an account",
        "userAvatar": "https://via.placeholder.com/40",

      },
      {
        "name": "Chukwuemeka Adekunle",
        "action": "Created an account",
        "userAvatar": "https://via.placeholder.com/40",

      },
      {
        "name": "Amara Okonjo",
        "action": "Uploaded a property",
        "userAvatar": "https://via.placeholder.com/40",

      },
      {
        "name": "Olachi Iwuagwu",
        "action": "Created an account",
        "userAvatar": "https://via.placeholder.com/40",

      },
      {
        "name": "Chukwuemeka Adekunle",
        "action": "Created an account",
        "userAvatar": "https://via.placeholder.com/40",

      },
      {
        "name": "Amara Okonjo",
        "action": "Uploaded a property",
        "userAvatar": "https://via.placeholder.com/40",

      }

    ]
  }
  );

  const lineChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (lineChartRef.current) {
        lineChartRef.current.destroy();
      }
      if (pieChartRef.current) {
        pieChartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className='w-full m-0'>
      <AdminDashboardNav />
      <div className='flex flex-col md:flex-row min-h-screen mx-7'>
        <div className="w-full md:w-4/6 p-4 mt-16 gap-3">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <div className="mb-4 md:mb-0 gap-2">

              <h1 className='text-2xl font-outfit font-semibold leading-9'>Dashboard</h1>
              <p className='text-gray-600 text-base leading-6 font-inter'>Welcome, {dashboardData.user.name}</p>
            </div>
          </div>

          <Ratings data={dashboardData} />
          <LineChart ref={lineChartRef} dashboardData={dashboardData} />
          <PieChart ref={pieChartRef} dashboardData={dashboardData} />

        </div>
        <RecentActivities data={dashboardData} />
      </div>
    </div>
  )
}

export default Dashboard