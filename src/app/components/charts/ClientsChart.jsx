'use client'; 
import React from 'react';
import { ScatterChart, Scatter, ZAxis, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const ClientsChart = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart>
        <XAxis type="number" dataKey="x" hide={true} />
        <YAxis type="number" dataKey="y" hide={true} />
        <ZAxis type="number" dataKey="z" range={[1000, 4000]} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter data={data}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ClientsChart;