// src/components/VisitingCustomers.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { day: 'Monday', count: 60 },
  { day: 'Tuesday', count: 40 },
  { day: 'Wednesday', count: 35 },
  { day: 'Thursday', count: 50 },
  { day: 'Friday', count: 20 },
  { day: 'Saturday', count: 10 },
  { day: 'Sunday', count: 5 },
];

const VisitingCustomers = () => (
  <div className="bg-white p-4 shadow rounded">
    <h3 className="text-xl font-semibold mb-4">Visiting Customers</h3>
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  </div>
);

export default VisitingCustomers;
