import React from 'react';

const DashboardStats = ({ records }) => {
  const totalRecords = records.length;

  const totalTrees = records.reduce(
    (sum, item) => sum + item.treesPlanted,
    0
  );

  const healthySites = records.filter(
    item => item.healthStatus === 'Healthy'
  ).length;

  const districtsCovered = new Set(
    records.map(item => item.district)
  ).size;

  const stats = [
    {
      title: 'Total Records',
      value: totalRecords,
    },
    {
      title: 'Total Trees',
      value: totalTrees,
    },
    {
      title: 'Healthy Sites',
      value: healthySites,
    },
    {
      title: 'Districts Covered',
      value: districtsCovered,
    },
  ];

  return (
    <div className="stats-grid">
      {stats.map(stat => (
        <div
          key={stat.title}
          className="stat-card"
        >
          <h3>{stat.title}</h3>

          <p>{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;