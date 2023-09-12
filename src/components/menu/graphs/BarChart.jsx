import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    {name: "Camion 1", ganancias: 1700, perdidas: 1244},
    {name: 'Camion 2', ganancias: 1244, perdidas: 5333},
    {name: 'Camion 3', ganancias: 1513, perdidas: 533},
    {name: 'Camion 4', ganancias: 5800, perdidas: 1000},
]

const MenuBarChart = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2}>
        <BarChart 
            data={data}
            width={500}
            height={300}
            margin={{
                top:5,
                right:30,
                left:20,
                bottom:5
            }}
        >
        <CartesianGrid strokeDasharray="4 1 2" />    
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="perdidas" fill="#e62c1c"/>
        <Bar dataKey="ganancias" fill="#0567a1"/>
        </BarChart>
    </ResponsiveContainer>
  )
}

export default MenuBarChart