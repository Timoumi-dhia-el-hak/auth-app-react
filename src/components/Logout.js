import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    //setAuthenticated(false);
    localStorage.setItem("auth", false);
    localStorage.removeItem('token');
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
