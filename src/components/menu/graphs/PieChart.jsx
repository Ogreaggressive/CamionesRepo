import React from 'react';
import { PieChart, ResponsiveContainer, Pie, Tooltip, Cell } from 'recharts';
import { pieChartData } from '../../../mocks/mockPieValues'; // Asegúrate de que la ruta sea correcta

const COLORS = ['#ce93d8', '#5c6bc0', '#b39ddb', '#4dd0e1', '#f48fb1', '#d500f9'];

const MenuPieCharts = ({ selectedMonth }) => {
    const dataForSelectedMonth = pieChartData[selectedMonth.toLowerCase()] || pieChartData['enero'];

    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        dataKey="value"
                        data={dataForSelectedMonth}
                        innerRadius={60}
                        outerRadius={85}
                        fill="#82ca9d"
                        label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
                    >
                        {dataForSelectedMonth.map((entry, index) => (
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