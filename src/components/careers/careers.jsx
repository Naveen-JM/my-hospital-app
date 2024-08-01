import React from 'react';
import './careers.css';

function JobOpening({ title, department ,qualification }) {
    return (
        <div className="job-opening">
            <h4>{title}</h4>
            <div className="job-details">
                <div className="detail">
                    <h6>Department</h6>
                    <p>{department}</p>
                </div>
                <div className="detail">
                    <h6>Qualification</h6>
                    <p>{qualification}</p>
                </div>
            </div>
            <p>Send your resume to "amzcare_007@gmail.com"</p>
        </div>
    );
}

function Careers() {
    return (
        <div>
            <h2 className="join-us-title">Join Our Beautiful Team.</h2>
            <div className="careers-container">
                <h3 className="join-us-title">To Care. To Teach. To Grow.</h3>
                <p className="jp">These words embody the opportunities available to doctors, nurses, lecturers, technicians and support staff who seek to grow their careers and experience the meaning of growing together. We are proud of our institution’s code of ethics, transparency. Caring for patients and their families; spearheading medical knowledge, technologies and practices; educating future healthcare professionals – you can help us with this and more when you join us.</p>
                <div>
                    {/* Display job openings */}
                    <JobOpening 
                        title="Senior Consultant: Emergency Medicine" 
                        department="Emergency Medicine" 
                        qualification="MD/DNB Emergency Medicine (10+ Years of Experience)" 
                    />
                    <JobOpening 
                        title="Fetal Medicine Consultant" 
                        department="OBG Department" 
                        qualification="MS/DNB/ Fellowship in Fetal Medicine with 0-5 years experience" 
                    />
                    {/* Add more job openings as needed */}
                </div>
                
                {/* Testimonials section */}
                <h2 className="join-us-title">Testimonials</h2>
                <div className="quotes-box">
                    <div className="quote">
                        <p>"It has been a amazing journey at Amaze Care Hospitals, as the name suggests it is amazing."</p>
                        <p>Dr. K Pazhani </p>
                    </div>
                    <div className="quote">
                        <p>"A Dream come true for a perfect work environment".</p>
                        <p>Dr. A Pazhani</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Careers;
