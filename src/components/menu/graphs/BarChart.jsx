import React, { useEffect } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { mockData } from '../../../mocks/mockBarValues'; // Importa los valores de ejemplo

const MenuBarChart = ({ setIngresosPorCamion, selectedMonth }) => {
  // Obtén los datos del mes seleccionado
  console.log(selectedMonth)
  const selectedMonthData = mockData[selectedMonth.toLowerCase()] || mockData['enero'];

  // Calcula la suma de ganancias y pérdidas al cargar el componente
  useEffect(() => {
    const totalGanancias = selectedMonthData.reduce((total, item) => total + item.ganancias, 0);
    const totalPerdidas = selectedMonthData.reduce((total, item) => total + item.perdidas, 0);
    const ingresosPorCamion = totalGanancias - totalPerdidas;

    // Llama a la función para pasar el valor de ingresosPorCamion al componente padre
    setIngresosPorCamion(ingresosPorCamion);
  }, [selectedMonthData, setIngresosPorCamion]);

  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <BarChart
        data={selectedMonthData}
        width={500}
        height={300}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="4 1 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="perdidas" fill="#e62c1c" />
        <Bar dataKey="ganancias" fill="#0567a1" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MenuBarChart;