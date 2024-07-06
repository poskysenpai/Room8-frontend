import React from 'react'
import { Pie } from 'react-chartjs-2'

const PieChart = ({ref, dashboardData}) => {
    const pieData = {
        labels: ['Highest Selling User Statistics', 'Lowest Selling User'],
        datasets: [
          {
            data: [dashboardData.statistics.highest, dashboardData.statistics.lowest],
            backgroundColor: ['#B93815', '#2D5DC3'],
          },
        ],
      };
    
      const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'right',
            align: 'start',
            labels: {
              boxWidth: 40,
              padding: 20,
            },
          },
        },
      };
  return (
   
    <div className="bg-white p-4 rounded shadow-md w-9/12">
    <h2 className="text-base leading-4 h-5 font-semibold mb-4 font-outfit">Statistics</h2>
    <div className="chart-container" style={{ width: '100%', height: '160px' }}>
      {pieData && <Pie ref={ref} data={pieData} options={pieOptions} />}
    </div>
  </div>
  )
}

export default PieChart