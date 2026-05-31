import { useState } from 'react';
import monitoringData from './data/monitoringData';
import DataTable from './components/DataTable';
import FilterBar from './components/FilterBar';
import MonitoringChart from './components/MonitoringChart';
import DashboardStats from './components/DashboardStats';
import AddRecordForm from './components/AddRecordForm';
function App() {
  const [records, setRecords] =
    useState(monitoringData);
  const [sortConfig, setSortConfig] =
    useState({
      key: null,
      direction: 'asc',
    });
  const [selectedDistrict, setSelectedDistrict] =
    useState('');

  const [selectedSpecies, setSelectedSpecies] =
    useState('');
  const districts = [
    ...new Set(
      monitoringData.map(
        item => item.district
      )
    ),
  ];

  const species = [
    ...new Set(
      monitoringData.map(
        item => item.species
      )
    ),
  ];

  const filteredRecords =
    records.filter(record => {

      const districtMatch =
        !selectedDistrict ||
        record.district === selectedDistrict;

      const speciesMatch =
        !selectedSpecies ||
        record.species === selectedSpecies;

      return (
        districtMatch &&
        speciesMatch
      );
    });

 const chartData = Object.values(
  filteredRecords.reduce(
    (acc, item) => {
      if (!acc[item.district]) {
        acc[item.district] = {
          district: item.district,
          treesPlanted: 0,
        };
      }

      acc[item.district].treesPlanted +=
        item.treesPlanted;

      return acc;
    },
    {}
  )
);

  const handleReset = () => {
    setSelectedDistrict('');
    setSelectedSpecies('');
  };
  const handleSort = key => {
    let direction = 'asc';

    if (
      sortConfig.key === key &&
      sortConfig.direction === 'asc'
    ) {
      direction = 'desc';
    }

    const sortedData = [...records].sort(
      (a, b) => {
        if (a[key] < b[key])
          return direction === 'asc'
            ? -1
            : 1;

        if (a[key] > b[key])
          return direction === 'asc'
            ? 1
            : -1;

        return 0;
      }
    );

    setRecords(sortedData);

    setSortConfig({
      key,
      direction,
    });
  };

const handleAddRecord = (
  newRecord
) => {

  const record = {
    id: Date.now(),
    ...newRecord,
  };

  setRecords(prev => [
    record,
    ...prev,
  ]);
};

  return (
    <div className="app">
      <h1>
        Agroforestry Monitoring Dashboard
      </h1>

      <DashboardStats
        records={filteredRecords}
      />
      <FilterBar
        districts={districts}
        species={species}
        selectedDistrict={
          selectedDistrict
        }
        selectedSpecies={
          selectedSpecies
        }
        onDistrictChange={
          setSelectedDistrict
        }
        onSpeciesChange={
          setSelectedSpecies
        }
        onReset={handleReset}
      />

      <div className="record-count">
        Showing {filteredRecords.length}
        {' '}records
      </div>

      <DataTable
        data={filteredRecords}
        onSort={handleSort}
      />

       <MonitoringChart
        data={chartData}
      /> 

      <AddRecordForm
  onAddRecord={
    handleAddRecord
  }
/>
    </div>
  );
}

export default App;