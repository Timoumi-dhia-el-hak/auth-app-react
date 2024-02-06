import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivetRoute';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
const isauth= localStorage.getItem("auth")
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    }
  }, []);
console.log('isauthenticated',authenticated)
  return (
    <>
     <Routes>
                   <Route element={<PrivateRoute isAuthenticated={authenticated||isauth} />}>
              <Route  path="/logout" element={<Logout/>} />
           </Route>  
           <Route element={<PrivateRoute isAuthenticated={authenticated||isauth} />}>
                <Route path="/" element={<Home />} />
           </Route>    
           <Route path="/login"element={<Login setAuthenticated={setAuthenticated} />}/>      
     </Routes>
       
    </>
  );
};

export default App;
