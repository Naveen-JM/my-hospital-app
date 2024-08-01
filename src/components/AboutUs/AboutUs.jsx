// AboutUs.js

import React from 'react';
import './AboutUs.css'; // Import CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h2>Welcome to Amaze Care Hospitals</h2>
        <p>Providing compassionate care since 1995</p>
      </div>
      <div className="about-us-content">
        <h3>Our Mission</h3>
        <p>
          At Amaze Care Hospitals, our mission is to provide exceptional healthcare services with compassion and integrity. We are committed to improving the health and well-being of our patients and communities we serve.
        </p>
        <h3>Our Values</h3>
        <ul>
          <li>Compassion</li>
          <li>Excellence</li>
          <li>Integrity</li>
          <li>Teamwork</li>
          <li>Innovation</li>
        </ul>
        <h3>Our History</h3>
        <p>
          Established in 1995, Amaze Care Hospitals has been a trusted healthcare provider for over two decades. From our humble beginnings, we have grown into a leading hospital known for our commitment to quality care and patient satisfaction.
        </p>
        <h3>Community Involvement</h3>
        <p>
          At Amaze Care Hospitals, we believe in giving back to the community. Through various outreach programs and partnerships, we strive to make a positive impact on the health and well-being of the communities we serve.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
