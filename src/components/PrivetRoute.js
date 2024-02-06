import React from 'react';
import { useLocation, Navigate, Outlet  } from 'react-router-dom';


const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
     const location = useLocation();
  return (
    <> 
    {isAuthenticated ?  <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />} 
    </>
  );
};

export default PrivateRoute;
