import axios from 'axios';
import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import {Link} from 'react-router-dom';
const Contact = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const handleValueChange = (e) => {
    setFname(e.target.value );
  };

  const handleValueChange1 = (e) => {
    setLname(e.target.value );
  };

  const handleItem1ValueChange = (e) => {
    setEmail(e.target.value );
  };

  const handleItem2ValueChange = (e) => {
    setSubject(e.target.value );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fname === '') return;
    let token = localStorage.getItem('token');
    let config = {
      headers:{
        'Content-Type': 'application/json',
        'x-auth-token': token
      }
    }
    let data = {
      "fname": fname,
      "lname": lname,
      "email": email,
      "subject": subject
    }
    try{
      const response = await axios.post('http://localhost:5001/api/contacts', data,config);
      console.log('Contact Form submitted successfully.',response)
    }
    catch(e)
{
  console.log(e.response.data.errors)
} 
   setFname('');
   setLname('');
    setEmail('');
    setSubject('');
   
  };

    //  props.addEmployee(value);
    //  setLists('');
  
    return (
      <div>
        <Header title='Employee Management System'/>
        <center>
           <h2 className='contact'> Let's Connect </h2>
          <p className='contact'> We would love to help you. </p><br/>
      <div className=''>Contact us</div>
      
      <form onSubmit={handleSubmit} className='Contact'>
        <br></br>
       
        <input
          
          type='text'
          placeholder='Enter First Name'
          value={fname}
          required
          onChange={handleValueChange}
        /> <br/>

<input
          
          type='text'
          placeholder='Enter Last Name'
          value={lname}
          required
          onChange={handleValueChange1}
        /> <br/>
        
            <input
              type='text'
              placeholder='Enter Email'
              value={email}
              onChange={handleItem1ValueChange}
            /><br/>
          
          
            <input
              type='text'
              placeholder='Enter Subject'
              value={subject}
              required
              onChange={handleItem2ValueChange}
            /> <br/> <br/>
          
        {/* <input className='addSubmit' type='submit' value='Submit' /> */}
        <Link 
    className="btn btn-secondary btn-width-200 search-submit" 
    to={{pathname: '/contactview'}}>
     Submit

</Link>
        
      </form>
      </center>
      <Footer/>

          </div>
      
    );
  }


export default Contact;