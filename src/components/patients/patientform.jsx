import React, { useState } from 'react';
import Footer from '../Footer/footer';
import classes from './patientform.module.css';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const PatientForm = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [patientId, setPatientId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      gender,
      date_of_birth: dateOfBirth,
      contact_number: contactNumber
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/patients/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        setPatientId(data.id);
        setOpenDialog(true);
        setName('');
        setGender('');
        setDateOfBirth('');
        setContactNumber('');
      } else {
        console.error('Failed to add patient:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = today.getFullYear();

    return `${year}-${month}-${day}`;
  };

  return (
    <div className={classes['myBackground']}>
      <div className={`${classes['patient-form-container']}`}>
        <h2>Add Patient</h2>
        <form onSubmit={handleSubmit} className={classes['form']}>
          <div className={classes['form-group']}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className={classes['form-group']}>
            <label htmlFor="gender">Gender:</label>
            <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="M">M</option>
              <option value="F">F</option>
            </select>
          </div>
          <div className={classes['form-group']}>
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" value={dateOfBirth} max={getCurrentDate()} onChange={(e) => setDateOfBirth(e.target.value)} />
          </div>
          <div className={classes['form-group']}>
            <label htmlFor="contact">Contact Number:</label>
            <input type="text" id="contact" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <Footer />
      </div>
      {/* Dialog Box */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Patient Added</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Patient has been successfully added. The patient ID is {patientId}.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PatientForm;
