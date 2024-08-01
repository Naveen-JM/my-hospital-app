// Home.jsx
import React from 'react';
import './home.css';
import ImageCarousel from '../Carousel/ImageCarousel';
import { Link } from 'react-router-dom'; // Import the ImageCarousel component
import Footer from '../Footer/footer';

const Home = () => {
  return (
    <div>
      <h2>Welcome to Amaze Care Hospitals</h2>
      <p>Where Health-Care meets Future</p>

      {/* Use the ImageCarousel component */}
      <div className="carousel-container">
        <ImageCarousel />
      </div>

      {/* Three boxes for different sections */}
      <div className="box">
        <h3>Book Appointment</h3>
        <p>Book an appointment with our healthcare professionals.</p>
        <Link to="/appointments/new" className="btn">Book Now</Link>
      </div>
      <div className="box">
        <h3>Doctors</h3>
        <p>Meet our team of experienced doctors.</p>
        <Link to="/doctors" className="btn">View Doctors</Link>
      </div>
      <div className="box">
        <h3>Patient Records</h3>
        <p>Access your patient profile and medical records.</p>
        <Link to="/patients/records" className="btn">Medical Records</Link> {/* Updated link */}
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
