import React, { useState, useEffect } from 'react';
import Footer from '../Footer/footer';
import classes from './appointmentform.module.css';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'; // Import dialog components from Material-UI

const AppointmentForm = () => {
  const [dateTime, setDateTime] = useState(new Date().toISOString().slice(0, 16)); // Set current date and time
  const [doctor, setDoctor] = useState('');
  const [patientId, setPatientId] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [status, setStatus] = useState('Scheduled');
  const [symptoms, setSymptoms] = useState('');
  const [natureOfVisit, setNatureOfVisit] = useState('');
  const [preferredDateTime, setPreferredDateTime] = useState('');
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false); // State to control dialog visibility
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/doctors/');
        if (response.ok) {
          const data = await response.json();
          setDoctors(data);
        } else {
          setError('Failed to fetch doctors. Please try again later.');
        }
      } catch (error) {
        setError(`Failed to fetch doctors: ${error.message}`);
      }
    };

    fetchDoctors();
  }, []);

  const fetchPatientData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/patients/${patientId}/`);
      if (response.ok) {
        const data = await response.json();
        setPatientData(data);
        setError(null);
      } else if (response.status === 404) {
        setPatientData(null);
        setError('Patient not found. Please check the Patient ID and try again.');
      } else {
        setPatientData(null);
        setError('Failed to fetch patient data. Please try again later.');
      }
    } catch (error) {
      setPatientData(null);
      setError(`Failed to fetch patient data: ${error.message}`);
    }
  };

  const checkExistingBooking = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/appointments/?date_time=${encodeURIComponent(dateTime)}`);
      if (response.ok) {
        const data = await response.json();
        return data.some(appointment => appointment.doctor === parseInt(doctor));
      } else {
        throw new Error('Failed to check existing bookings.');
      }
    } catch (error) {
      setError(`Error checking existing bookings: ${error.message}`);
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!patientData) {
      setError('Please enter a valid patient ID.');
      return;
    }

    const existingBooking = await checkExistingBooking();
    if (existingBooking) {
      setError('This time slot is already booked for the selected doctor. Please choose another time or doctor.');
      return;
    }

    const formattedDateTime = new Date(dateTime).toISOString().slice(0, 19).replace('T', ' ');

    const formData = {
      date_time: formattedDateTime,
      doctor: parseInt(doctor),
      patient: patientData.id,
      status,
      full_name: patientData.name,
      date_of_birth: patientData.date_of_birth,
      gender: patientData.gender,
      contact_information: patientData.contact_number,
      symptoms,
      nature_of_visit: natureOfVisit,
      preferred_date_time: preferredDateTime,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/appointments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Appointment added successfully!');
        setDateTime(new Date().toISOString().slice(0, 16)); // Reset to current date and time
        setDoctor('');
        setPatientId('');
        setPatientData(null);
        setStatus('Scheduled');
        setSymptoms('');
        setNatureOfVisit('');
        setPreferredDateTime('');
        setError(null);
        setOpenDialog(true); // Open dialog on successful submission
      } else {
        const errorData = await response.json();
        console.error('Failed to add appointment:', response.statusText, errorData);
        setError(`Failed to add appointment: ${response.statusText} - ${JSON.stringify(errorData)}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while adding the appointment. Please try again later.');
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); // Close dialog when user clicks OK
  };

  return (
    <div className={classes.MyBackground}>
      <div className={classes['appointment-form-container']}>
        <h2>Add Appointment</h2>
        <form onSubmit={handleSubmit}>
          <label>Date and Time:</label>
          <input
            type="datetime-local"
            value={dateTime}
            readOnly // Make the date and time input read-only
          />
          <label>Doctor:</label>
          <select
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          >
            <option value="">Select a doctor</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.name} ({doc.specialty})
              </option>
            ))}
          </select>
          <label>Patient ID:</label>
          <input
            type="text"
            value={patientId}
            onBlur={fetchPatientData}
            onChange={(e) => setPatientId(e.target.value)}
          />
          {patientData && (
            <div className={classes.patientData}>
              <p><strong>Name:</strong> {patientData.name}</p>
              <p><strong>Gender:</strong> {patientData.gender}</p>
              <p><strong>Date of Birth:</strong> {patientData.date_of_birth}</p>
              <p><strong>Contact Number:</strong> {patientData.contact_number}</p>
            </div>
          )}
          {error && <p className={classes.error}>{error}</p>}
          <label>Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Scheduled">Scheduled</option>
            <option value="Completed">Completed</option>
            <option value="Canceled">Canceled</option>
          </select>
          <label>Symptoms:</label>
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
          <label>Nature of Visit:</label>
          <input
            type="text"
            value={natureOfVisit}
            onChange={(e) => setNatureOfVisit(e.target.value)}
          />
          <label>Preferred Date and Time:</label>
          <input
            type="datetime-local"
            value={preferredDateTime}
            onChange={(e) => setPreferredDateTime(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
      {/* Dialog Box */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Appointment Added</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your appointment has been successfully booked.
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

export default AppointmentForm;
