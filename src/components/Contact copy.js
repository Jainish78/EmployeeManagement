import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { NavLink } from 'react-router-dom';
const Contact = () => {
    return (
        <div >
         <Header title='Employee Management System'/>
           <h2 className='contact'> Let's Connect </h2>
          <p className='contact'> We would love to help you. </p><br/>
            <div className='contactform'>
           <form action='Home.js'>
            <h2> Contact Form:</h2>
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/><br/><br/>

            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/><br/><br/>

            <label for="email">Email</label>
            <input type="text" id="email" name="emailid" placeholder="Your email id"/><br/><br/>


            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Write something.." ></input><br/><br/>

            <span ><NavLink to='/contactview'>Submit</NavLink> </span>


            </form>
            </div>
           <Footer/>
        </div>
    )
}

export default Contact;
