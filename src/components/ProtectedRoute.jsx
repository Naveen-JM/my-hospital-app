import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Component {...rest} /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;