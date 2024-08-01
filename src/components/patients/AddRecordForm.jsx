import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import classes from"./AddRecordForm.module.css";
import Footer from '../Footer/footer';

const AddRecordForm = () => {
  const [formData, setFormData] = useState({
    patient: '',
    current_symptoms: '',
    physical_examination: '',
    treatment_plan: '',
    prescription: ''
  });
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/patients/');
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/medical-records/', formData);
      console.log('Record added successfully:', response.data);
      navigate('/patients/records');
    } catch (error) {
      console.error('Error adding record:', error);
    }
  };

  return (
    <div className={classes['myBackground']}>
        <div className={`${classes['addrecord-form-container']}`}>
      <h3>Add New Medical Record</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="patient">Patient:</label>
          <select id="patient" name="patient" value={formData.patient} onChange={handleChange} required>
            <option value="">Select Patient</option>
            {patients.map(patient => (
              <option key={patient.id} value={patient.id}>{patient.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="current_symptoms">Current Symptoms:</label>
          <textarea id="current_symptoms" name="current_symptoms" value={formData.current_symptoms} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="physical_examination">Physical Examination:</label>
          <textarea id="physical_examination" name="physical_examination" value={formData.physical_examination} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="treatment_plan">Treatment Plan:</label>
          <textarea id="treatment_plan" name="treatment_plan" value={formData.treatment_plan} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="prescription">Prescription:</label>
          <textarea id="prescription" name="prescription" value={formData.prescription} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default AddRecordForm;
