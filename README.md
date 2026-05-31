# 🌳 Agroforestry Monitoring Dashboard

A React-based web application developed as part of the CIFOR-ICRAF Software Development Assessment.

The dashboard allows users to monitor agroforestry plantation records, visualize plantation data, and add new monitoring records through an interactive interface.

---

## Features

### 📊 Dashboard Statistics
Displays key agroforestry metrics:

- Total Records
- Total Trees Planted
- Healthy Sites
- Districts Covered

### 📋 Data Table
Displays agroforestry monitoring records with:

- District
- Tree Species
- Number of Trees Planted
- Planting Date
- Health Status

Table functionality includes:

- Sort by any column
- Responsive layout
- Dynamic updates when new records are added

### 🔍 Filtering
Users can filter records by:

- District
- Tree Species

Includes a reset option to clear all filters.

### 📈 Data Visualization
Interactive bar chart showing:

- Trees Planted per District

The chart automatically updates when records are filtered or added.

### ➕ Add New Record
Users can add a new agroforestry monitoring record using a simple form.

Form fields:

- District
- Species
- Trees Planted
- Planting Date
- Health Status

Validation ensures all fields are completed before submission.

---

## Technologies Used

- React
- Vite
- Chart.js
- react-chartjs-2
- JavaScript (ES6+)
- CSS3

---

## Project Structure

```text
src/
├── components/
│   ├── DashboardStats.jsx
│   ├── FilterBar.jsx
│   ├── DataTable.jsx
│   ├── MonitoringChart.jsx
│   └── AddRecordForm.jsx
│
├── data/
│   └── monitoringData.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project Folder

```bash
cd agroforestry-monitoring
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Open the URL displayed in the terminal (usually:

```text
http://localhost:5173
```

)

---

## Sample Functionalities

### Sorting

Click any table column header to sort:

- District
- Species
- Trees Planted
- Planting Date
- Health Status

### Filtering

Use the filter dropdowns to display records from:

- A specific district
- A specific tree species

### Adding Records

Submitting a new record will automatically:

- Update the data table
- Update dashboard statistics
- Update filter options
- Update the chart

---

## Author

**Shivanshu Jaiswal**

Frontend Developer

- React
- React Native
- JavaScript
- Redux
- Mobile & Web Application Development

---

## Assessment Notes

This project was created for the CIFOR-ICRAF Software Development Assessment to demonstrate:

- React fundamentals
- State management
- Data visualization
- Form handling and validation
- Data filtering and sorting
- Responsive dashboard design

<img width="767" height="371" alt="3" src="https://github.com/user-attachments/assets/dd390c65-decf-4ba6-8d90-7e499e3c7aff" />
<img width="839" height="290" alt="2" src="https://github.com/user-attachments/assets/cd5ee90f-d9f4-48ac-ab15-0ebbf2f905f3" />
<img width="848" height="299" alt="1" src="https://github.com/user-attachments/assets/e793066f-af2b-43bc-9224-596b1008c3fc" />
<img width="692" height="158" alt="4" src="https://github.com/user-attachments/assets/01317c38-1688-4f32-93a1-a86327c4ebe7" />
