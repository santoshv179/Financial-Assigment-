'use client';
import React from "react";
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



const MonthlyMisChart = ({data}) => { //props 
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false}/>
        <XAxis dataKey="name" tickLine={false} axisLine={false}/>
        <YAxis tickLine={false} axisLine={false}/>
        <Tooltip/>
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"/>
        <Line type="monotone" dataKey="pv" stroke="#82ca9d"/>
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MonthlyMisChart
