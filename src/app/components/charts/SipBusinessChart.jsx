"use client"

import React from "react"

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from 'recharts';



const SipBusinessChart =({data})=>{
    return(
        <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis dataKey="name" tickLine={false} axisLine={false}/>
                <YAxis tickLine={false} axisLine={false}/>
                <Tooltip/>
                <Bar dataKey="new" fill="#8884d8" barSize={20}/>
                <Line type="monotone" dataKey="total" stroke="#ff7300"/>
            </ComposedChart>
        </ResponsiveContainer>
    )
}

export default SipBusinessChart