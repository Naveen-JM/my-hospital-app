import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from './logo.jpg';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <NavLink className="navbar-brand" to="/" onClick={closeNav}>
          <img src={logo} alt="Logo" className="navbar-logo" />
          <span className="brand-text">Amaze Care Hospitals</span>
        </NavLink>
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="is-active" to="/appointments/new" onClick={closeNav}>Appointments</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="is-active" to="/patients/new" onClick={closeNav}>Patients</NavLink>
            </li>
            <li className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
              <NavLink className="nav-link dropdown-toggle" to="#" onClick={toggleDropdown}>Doctors</NavLink>
              <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" activeClassName="is-active" to="/doctors/new" onClick={closeDropdown}>Add New Doctor</NavLink>
                <NavLink className="dropdown-item" activeClassName="is-active" to="/doctors" onClick={closeDropdown}>Doctor List</NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="is-active" to="/services" onClick={closeNav}>Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="is-active" to="/careers" onClick={closeNav}>Careers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="is-active" to="/about" onClick={closeNav}>About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="is-active" to="/contact" onClick={closeNav}>Contact Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="is-active" to="/signup" onClick={closeNav}>Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="is-active" to="/signin" onClick={closeNav}>Log In</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
