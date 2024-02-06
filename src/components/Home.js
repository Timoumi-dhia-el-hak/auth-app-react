import React from 'react';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/logout');
};
  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
