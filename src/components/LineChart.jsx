import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ ref, dashboardData }) => {
  const lineData = {
    labels: dashboardData.income.labels,
    datasets: [
      {
        label: 'Product 1',
        data: dashboardData.income.data,
        borderColor: '#165BAA',
        backgroundColor: '#165BAA'
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align: 'start',  
        labels: {
          color: '#4F4F4F',
          boxWidth: 25,
          padding: 20
        },
        maxHeight: 30,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days of the Month',
          color: 'black',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        ticks: {
          color: 'black',
          font: {
            size: 12,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Revenue in Naira',
          color: 'black',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        ticks: {
          color: 'black',
          font: {
            size: 12,
          },
        },
        min: -100,
        max: 100,
      },
    },
  };

  return (
    <div className='bg-white p-4 rounded shadow-md mb-3 h-2/5'>
      <h2 className='text-base leading-6 mb-4 font-semibold font-outfit ml-5 h-6'>Statistics showing income made</h2>
      <div className="chart-container ml-1" style={{ width: '95%', height: '260px', marginTop: '15px' }}>
        {lineData && <Line ref={ref} data={lineData} options={lineOptions} />}
      </div>
    </div>
  );
};

export default LineChart;
