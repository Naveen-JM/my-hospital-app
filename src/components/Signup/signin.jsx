import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../Footer/footer';
import classes from './signin.module.css';
import { useAuth } from '../context/AuthContext';

const SigninForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login, logout, token } = useAuth(); // Get login, logout, and token from AuthContext

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/token/', {
                username,
                password
            });
            const token = response.data.access; // Extract token from response
            if (token) {
                login(token); // Use login function from AuthContext to set token
                console.log('Token:', token);
            } else {
                setError('Token not found in response');
            }
        } catch (error) {
            setError('Invalid username or password');
            console.error('Error signing in:', error);
        }
    };

    const handleSignOut = () => {
        logout(); // Call logout function from AuthContext
        // Redirect the user to the sign-in page or any other appropriate page
        window.location.href = '/signin'; // Redirect to the sign-in page
    };

    return (
        <div className={classes['mybackground']}>
            <div className={classes.signinContainer}>
                {token ? (
                    <>
                        <p className={classes.signedInMessage}>{username && `${username},`} You are Signed in.</p>
                        <p className={classes.signedInMessage}>Want to use different Account? Please Sign Out</p> 
                        <button className={classes.signoutButton} onClick={handleSignOut}>Sign Out</button>    
                    </>
                ) : (
                    <>
                        <h3 className={classes['h3']}>Sign In</h3>
                        <form onSubmit={handleSubmit} className={classes.signinForm}>
                            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className={classes.signinInput} />
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={classes.signinInput} />
                            <button type="submit" className={classes['signinbutton']}>Sign In</button>
                        </form>
                        {error && <p className={classes.errorMessage}>{error}</p>} {/* Display error message */}
                    </>
                )}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default SigninForm;
