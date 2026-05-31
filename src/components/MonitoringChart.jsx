import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MonitoringChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.district),

    datasets: [
      {
        label: 'Trees Planted',
        data: data.map(
          item => item.treesPlanted
        ),
        backgroundColor:
          'rgba(46, 125, 50, 0.7)',
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: 'top',
      },

      title: {
        display: true,
        text: 'Trees Planted Per District',
      },
    },
  };

  return (
    <div className="chart-card">
      <Bar
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default MonitoringChart;