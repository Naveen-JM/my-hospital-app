import React, { useState } from 'react';
import axios from 'axios';
import classes from './signup.module.css'; 
import Footer from '../Footer/footer';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (password !== confirmPassword) {
                setError('Passwords do not match');
                return;
            }

            const response = await axios.post('http://localhost:8000/api/signup/', {
                username,
                password,
            });
            setSuccessMessage(`${username}!! you are successfully registered`);
            setUsername('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            setError('User already exists');
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className={classes['mybackground']}>
            <div className={`${classes.signupContainer}`}>
                <h3 className={classes['h3']}>Sign Up</h3>
                <form onSubmit={handleSubmit} className={classes.signupForm}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className={classes.signupInput} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={classes.signupInput} />
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={classes.signupInput} />
                    <button type="submit" className={classes['signupButton']}>Sign Up</button>
                </form>
                {error && <p className={classes.errorMessage}>{error}</p>}
                {successMessage && <p className={classes.successMessage}>{successMessage}</p>}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default SignupForm;
