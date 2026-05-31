import { useState } from 'react';

const initialForm = {
  district: '',
  species: '',
  treesPlanted: '',
  plantingDate: '',
  healthStatus: '',
};

function AddRecordForm({ onAddRecord }) {
  const [formData, setFormData] =
    useState(initialForm);

  const [message, setMessage] =
    useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const {
      district,
      species,
      treesPlanted,
      plantingDate,
      healthStatus,
    } = formData;

    if (
      !district ||
      !species ||
      !treesPlanted ||
      !plantingDate ||
      !healthStatus
    ) {
      setMessage(
        'Please fill all fields.'
      );
      return;
    }

    onAddRecord({
      ...formData,
      treesPlanted:
        Number(treesPlanted),
    });

    setMessage(
      'Record added successfully!'
    );

    setFormData(initialForm);
  };

  return (
    <div className="form-card">
      <h2>Add New Record</h2>

      <form
        onSubmit={handleSubmit}
      >
        <div className="form-grid">

          <input
            type="text"
            name="district"
            placeholder="District"
            value={formData.district}
            onChange={handleChange}
          />

          <input
            type="text"
            name="species"
            placeholder="Species"
            value={formData.species}
            onChange={handleChange}
          />

          <input
            type="number"
            name="treesPlanted"
            placeholder="Trees Planted"
            value={
              formData.treesPlanted
            }
            onChange={handleChange}
          />

          <input
            type="date"
            name="plantingDate"
            value={
              formData.plantingDate
            }
            onChange={handleChange}
          />

          <select
            name="healthStatus"
            value={
              formData.healthStatus
            }
            onChange={handleChange}
          >
            <option value="">
              Select Health Status
            </option>

            <option value="Healthy">
              Healthy
            </option>

            <option value="Moderate">
              Moderate
            </option>

            <option value="Poor">
              Poor
            </option>
          </select>

        </div>

        <button
          type="submit"
          className="submit-btn"
        >
          Add Record
        </button>

        {message && (
          <p className="message">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default AddRecordForm;