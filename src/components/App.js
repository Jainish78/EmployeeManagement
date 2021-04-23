import React, { useState, useCallback } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ContactView from './ContactView';
import Login from './auth/Login';
import Project from './Project';
import Register from './auth/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import AddEmployeeForm from './AddEmployeeForm';
import AddEmployeeFormView from './AddEmployeeFormView';
import AddProjectFormView from './AddProjectFormView';
import AuthContext from '../contexts/AuthContext';
import JsonApi from './JsonApi';
import Header from './Header';
import { NavLink } from 'react-router-dom';




const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState('false');
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let approutes;
  if (isLoggedIn) {
    approutes = (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contactview' element={<ContactView />} />
        <Route path='/api' element={<JsonApi />} />
        <Route path='/login' element={<Login />} />
        <Route path='/project' element={<Project />} />
        <Route path='/register' element={<Register />} />
        <Route path='/addemployee' element={<AddEmployeeFormView />} />
        <Route path='/addproject' element={<AddProjectFormView />} />
      </Routes>
    );
  } else {
    approutes = (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contactview' element={<ContactView />} />
        <Route path='/addproject' element={<AddProjectFormView />} />
        <Route path='/project' element={<Project />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    );
  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <BrowserRouter>
        {approutes}
      </BrowserRouter>
    </AuthContext.Provider>
  );
};
export default App;
