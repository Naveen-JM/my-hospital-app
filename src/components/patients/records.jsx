// Records.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import classes from './records.module.css';

const Records = () => {
  const { token } = useAuth(); // Get token from AuthContext

  // Check if token exists
  if (!token) {
    return (
      <div className={`${classes['my-background']}`}>
        <div className='{styles.box-sign}'>
        <p className={`${classes['p']}`}>Please <Link to="/signin">Sign In</Link> to View Records.</p>
        </div>
      </div>
    );
  }
  return (
    <div className={`${classes['my-background']}`}>
      <h2 className={`${classes['h2']}`}>Medical Records</h2>
      <div className={`${classes['box']}`}>
        <h3 className={`${classes['h3']}`}>View Patient Records</h3>
        <p>View the medical records of existing patients.</p>
        <Link to="/patients/records/view" className={`${classes['btn']}`}>View Records</Link>
      </div>
      {/* Second box for adding a new record */}
      <div className={`${classes['box']}`}>
        <h3 className={`${classes['h3']}`}>Add New Record</h3>
        <p>Add a new medical record for a patient.</p>
        <Link to="/patients/records/add" className={`${classes['btn']}`}>Add Record</Link>
      </div>
    </div>
  );
};

export default Records;
