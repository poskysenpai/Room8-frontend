// src/components/AverageUsageTime.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { day: 'Monday', time: 30 },
  { day: 'Tuesday', time: 20 },
  { day: 'Wednesday', time: 40 },
  { day: 'Thursday', time: 60 },
  { day: 'Friday', time: 10 },
  { day: 'Saturday', time: 5 },
  { day: 'Sunday', time: 5 },
];

const AverageUsageTime = () => (
  <div className="bg-white p-4 shadow rounded">
    <h3 className="text-xl font-semibold mb-4">Average Usage Time</h3>
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="time" stroke="#82ca9d" />
    </LineChart>
  </div>
);

export default AverageUsageTime;
