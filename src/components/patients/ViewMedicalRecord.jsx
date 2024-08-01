import React, { useState } from 'react';
import axios from 'axios';
import classes from './viewMedicalRecord.module.css'; // Import the CSS module file

const ViewMedicalRecord = () => {
  const [patientId, setPatientId] = useState('');
  const [records, setRecords] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setPatientId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/medical-records/patient/${patientId}/`);
      if (response.data.length === 0) {
        setRecords([]); // Clear previous records
        setError('No records found for the entered patient ID.');
      } else {
        setRecords(response.data);
        setError('');
      }
    } catch (error) {
      setRecords([]); // Clear previous records
      setError('Error fetching records. Please try again later.');
      console.error('Error fetching records:', error);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.viewMedicalRecord}>
        <h2>View Medical Records</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="patientId">Enter Patient ID:</label>
          <input type="text" id="patientId" value={patientId} onChange={handleChange} className={classes.inputField} />
          <button type="submit" className={classes.submitButton}>Search</button>
        </form>
        {error && <p className={classes.error}>{error}</p>}
        {records.length > 0 && (
          <table className={classes.recordsTable}>
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Current Symptoms</th>
                <th>Physical Examination</th>
                <th>Treatment Plan</th>
                <th>Prescription</th>
              </tr>
            </thead>
            <tbody>
              {records.map(record => (
                <tr key={record.id}>
                  <td>{record.patient}</td>
                  <td>{record.current_symptoms}</td>
                  <td>{record.physical_examination}</td>
                  <td>{record.treatment_plan}</td>
                  <td>{record.prescription}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ViewMedicalRecord;
