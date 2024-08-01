import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './components/home/homepage';
import AboutUs from './components/AboutUs/AboutUs';
import PatientForm from './components/patients/patientform';
import AppointmentForm from './components/appointments/appointmentform';
import DoctorsList from './components/doctors/doctorlist';
import DoctorForm from './components/doctors/doctorform';
import Services from './components/services/services';
import PatientRecords from './components/patients/records';
import AddRecordForm from './components/patients/AddRecordForm';
import ViewMedicalRecord from './components/patients/ViewMedicalRecord';
import Contact from './components/ContactUs/contactus';
import Careers from './components/careers/careers';
import SignupForm from './components/Signup/signup';
import SigninForm from './components/Signup/signin';
import { AuthProvider } from './components/context/AuthContext';


function App() {
  return (
    <Router>
      <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patients/new" element={<PatientForm />} />
          <Route path="/doctors" element={<DoctorsList />} />
          <Route path="/doctors/new" element={<DoctorForm />} />
          <Route path="/appointments/new" element={<AppointmentForm />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/patients/records" element={<PatientRecords />} />
          <Route path="/patients/records/add" element={<AddRecordForm />} />
          <Route path="/patients/records/view" element={<ViewMedicalRecord />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/signin" element={<SigninForm />} />
        </Routes>
      </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
