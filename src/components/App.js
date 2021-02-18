<<<<<<< HEAD
import React, {useState} from 'react';
import Home from './Home1';
import About from './About';
import Contact from './Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
=======
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
>>>>>>> 0e7f7cabfd4cc67e6e9584e31e741b1532f943a1


const App = () => {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      
      <div></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
=======
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
>>>>>>> 0e7f7cabfd4cc67e6e9584e31e741b1532f943a1
  );
};

export default App;
