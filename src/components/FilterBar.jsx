import React from 'react';

const FilterBar = ({
  districts,
  species,
  selectedDistrict,
  selectedSpecies,
  onDistrictChange,
  onSpeciesChange,
  onReset,
}) => {
  return (
    <div className="filter-bar">

      <div className="filter-group">
        <label>District</label>

        <select
          value={selectedDistrict}
          onChange={e =>
            onDistrictChange(e.target.value)
          }
        >
          <option value="">
            All Districts
          </option>

          {districts.map(district => (
            <option
              key={district}
              value={district}
            >
              {district}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Species</label>

        <select
          value={selectedSpecies}
          onChange={e =>
            onSpeciesChange(e.target.value)
          }
        >
          <option value="">
            All Species
          </option>

          {species.map(item => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
      </div>

      <button
        className="reset-btn"
        onClick={onReset}
      >
        Reset Filters
      </button>

    </div>
  );
};

export default FilterBar;