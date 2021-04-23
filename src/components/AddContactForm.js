import axios from 'axios';
import React, { useState } from 'react';

const AddContactForm = (props) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const handleValueChange1 = (e) => {
    setFname(e.target.value );
  };

  const handleValueChange1 = (e) => {
    setLname(e.target.value );
  };

  const handleItem1ValueChange1 = (e) => {
    setEmail(e.target.value );
  };

  const handleItem2ValueChange1 = (e) => {
    setSubject(e.target.value );
  };

  const handleSubmit1 = async (e) => {
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
      console.log('Contact Form Submitted',response)
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

    // props.addEmployee(value);
    // setLists('');
  
    return (
      <div>
      
      <form onSubmit={handleSubmit1} className='addContactform'>
        <br></br>
       
        <input
          
          type='text'
          placeholder='Enter First Name'
          value={fname}
          onChange={handleValueChange1}
        /> <br/>

        <input
          
          type='text'
          placeholder='Enter Last Name'
          value={lname}
          onChange={handleValueChange1}
        /> <br/>
        
            <input
              type='text'
              placeholder='Enter Email'
              value={email}
              onChange={handleItem1ValueChange1}
            /><br/>
          
          
            <input
              type='text'
              placeholder='Enter Subject'
              value={subject}
              onChange={handleItem2ValueChange1}
            /> <br/> <br/>
          
        <input className='addSubmit' type='submit' value='submit' />
      </form>
          </div>

    );
  }


export default AddContactForm;