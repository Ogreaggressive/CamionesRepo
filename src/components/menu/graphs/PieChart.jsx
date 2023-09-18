import React from 'react';
import { PieChart, ResponsiveContainer, Pie, Tooltip, Cell } from 'recharts';

const data = [
    { name: "Gasolina", value: 2400 },
    { name: 'Mermas', value: 3567 },
    { name: 'Viaticos', value: 1398 },
    { name: 'Gasto Adicional', value: 2800 },
    { name: 'Sueldos', value: 11000 },
];

const COLORS = ['#ce93d8', '#5c6bc0', '#b39ddb', '#4dd0e1', '#f48fb1', '#d500f9'];

const MenuPieCharts = () => {
    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        dataKey="value"
                        data={data}
                        innerRadius={60}
                        outerRadius={85}
                        fill="#82ca9d"
                        label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MenuPieCharts;