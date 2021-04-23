import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Header from '../Header';
import Footer from '../Footer';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;
  const onChange2 = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit2 = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    let data = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        'http://localhost:5001/api/user',
        data,
        config
      );
      localStorage.setItem('token', response.data.token);
      console.log(response);
      let decodeduser = decode(response.data.token);
      console.log(decodeduser);
    } catch (e) {
      console.log('error ', e);
    }
  };

  return (
    <>
       <Header title='Employee Management System'/>
       <div className='registerForm'>
      <h1>Sign Up</h1>
      <p>Create Your Account</p>
      <form onSubmit={(e) => onSubmit2(e)}>
        <div>
          <input
            type='text1'
            placeholder='Name'
            name='name'
            required
            onChange={(e) => onChange2(e)}
          />
        </div><br></br>
        <div>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            onChange={(e) => onChange2(e)}
          />
        </div><br></br>
        <div>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='5'
            onChange={(e) => onChange2(e)}
          />
        </div><br></br>
        <div>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            minLength='5'
            onChange={(e) => onChange2(e)}
          />
        </div> <br/>
        <input type='submit' value='Register' />
      </form> <br/>
      <p>
        <b>Already have an account? </b><Link to='/login'>Sign In</Link>
      </p>
      </div>
      <Footer/>
    </>
  );
};

export default Register;
