import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { NavLink } from 'react-router-dom';

const ContactView = (props) => {
    return (
        <div>
        <Header title='Employee Management System'/> 
         <h4> <center>  Your form has been submitted successfully. <br/> <br/> 
             We will try to reach you as soon as possible. <br/> <br/>
            Click here to return home page.    <span ><NavLink to='/'>Home</NavLink> </span> </center> </h4> 

        <Footer/>
      </div>
    );
  };
  
  export default ContactView;
  