import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import classes from './doctorlist.module.css';
import Footer from '../Footer/footer';

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch doctors data from the backend API
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/doctors/');
        setDoctors(response.data); // Update state with fetched doctors data
      } catch (error) {
        setError(error.message); // Set error state if request fails
      }
    };

    // Call fetchDoctors function when the component mounts
    fetchDoctors();
  }, []);

  return (
    <div className = {`${classes['my-background']}`}>
      <h2 className={classes['h2']}>Meet Our Doctors</h2>
      <div className={classes['doctors-container']}>
        {/* Display list of doctors */}
        {doctors.map((doctor) => (
          <div key={doctor.id} className={classes['doctor-card']}>
            <p>Id: {doctor.id}</p>
            <p>Name: {doctor.name}</p>
            <p>Designation: {doctor.designation}</p>
            <p>Qualification: {doctor.qualification}</p>
            <p>Specialization: {doctor.specialty}</p>
            <p>Experience: {doctor.experience}</p>
            {/* Add more fields as needed */}
          </div>
        ))}
      </div>
      
      {/* Display error message if request fails */}
      {error && <p>Error: {error}</p>}
      <div>
        {/* Component content... */}
      <Footer /></div>
    </div>
  );
};

export default DoctorsPage;
