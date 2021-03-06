import axios from 'axios';
import React, { useState } from 'react';

const AddEmployeeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');

  const handleValueChange = (e) => {
    setName(e.target.value );
  };

  const handleItem1ValueChange = (e) => {
    setEmail(e.target.value );
  };

  const handleItem2ValueChange = (e) => {
    setSalary(e.target.value );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === '') return;
    let token = localStorage.getItem('token');
    let config = {
      headers:{
        'Content-Type': 'application/json',
        'x-auth-token': token
      }
    }
    let data = {
      "name": name,
      "email": email,
      "salary": salary
    }
    try{
      const response = await axios.post('http://localhost:5001/api/employees', data,config);
      console.log('Employee added',response)
    }
    catch(e)
{
  console.log(e.response.data.errors)
} 
   setName('');
    setEmail('');
    setSalary('');
   
  };

    //  props.addEmployee(value);
    //  setLists('');
  
    return (
      <div>
      <div className='add-employee'>Add Employee</div>
      <form onSubmit={handleSubmit} className='addEmployeeform'>
        <br></br>
       
        <input
          
          type='text'
          placeholder='Enter Employee Name'
          value={name}
          onChange={handleValueChange}
        /> <br/>
        
            <input
              type='text'
              placeholder='Enter Email'
              value={email}
              onChange={handleItem1ValueChange}
            /><br/>
          
          
            <input
              type='text'
              placeholder='Enter Employee Salary'
              value={salary}
              onChange={handleItem2ValueChange}
            /> <br/> <br/>
          
        <input className='addSubmit' type='submit' value='Add Employee' />
      </form>
          </div>

    );
  }


export default AddEmployeeForm;