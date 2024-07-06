import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Female', value: 60 },
  { name: 'Male', value: 40 },
];

// Colors from the image: Green for Female, Blue for Male
const COLORS = ['#98C353', '#0088FE'];

const CustomLegend = ({ payload }) => (
  <div>
    {payload.map((entry, index) => (
      <div key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
        <div style={{
          width: 40, // Increased width for rectangular shape
          height: 20, // Height remains the same
          backgroundColor: entry.color,
          marginRight: 10,
          flexShrink: 0
        }} />
        <span style={{ color: '#000', fontSize: 16 }}>{entry.value}</span>
      </div>
    ))}
  </div>
);

const UserDemographicSex = () => (
  <div className="bg-white p-4 shadow rounded">
    <h3 className="text-xl font-semibold mb-4">User Demographic (Sex)</h3>
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend
        content={<CustomLegend />}
        layout="vertical"
        align="right"
        verticalAlign="middle"
      />
    </PieChart>
  </div>
);

export default UserDemographicSex;
