import axios from 'axios';
import React, { useState } from 'react';

const AddProjectForm = () => {
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [duration, setDuration] = useState('');

  const handleValueChange = (e) => {
    setName(e.target.value );
  };

  const handleItem1ValueChange = (e) => {
    setDetail(e.target.value );
  };

  const handleItem2ValueChange = (e) => {
    setDuration(e.target.value );
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
      "detail": detail,
      "duration": duration
    }
    try{
      const response = await axios.post('http://localhost:5001/api/projects', data,config);
      console.log('Project added',response)
    }
    catch(e)
{
  console.log(e.response.data.errors)
} 
   setName('');
    setDetail('');
    setDuration('');
   
  };

    //  props.addEmployee(value);
    //  setLists('');
  
    return (
      <div>
      <div className='add-project'>Add Project</div>
      <form onSubmit={handleSubmit} className='addProjectform'>
        <br></br>
       
        <input
          
          type='text'
          placeholder='Enter Project Name'
          value={name}
          onChange={handleValueChange}
        /> <br/>
        
            <input
              type='text'
              placeholder='Enter Details'
              value={detail}
              onChange={handleItem1ValueChange}
            /><br/>
          
          
            <input
              type='text'
              placeholder='Enter Project Duration'
              value={duration}
              onChange={handleItem2ValueChange}
            /> <br/> <br/>
          
        <input className='addSubmit' type='submit' value='Add Project' />
      </form>
          </div>

    );
  }


export default AddProjectForm;