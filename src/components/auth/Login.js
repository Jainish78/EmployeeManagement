import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const Login = () => {
  const auth = useContext(AuthContext);
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');

  const { email, password } = formData;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const onChange2 = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit2 = async (e) => {
    e.preventDefault();

    let formValid = true;

    let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email == '') {
      formValid = false;
      setEmailError('Please Enter email');
    } else if (!email.match(emailPattern)) {
      formValid = false;
      setEmailError('Please Enter email in valid format');
    } else {
      formValid = true;
      setEmailError('');
    }

    if (formValid) {
      setIsLoading(true);
      let config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      let data = {
        email: email,
        password: password,
      };
      try {
        const response = await axios.post(
          'http://localhost:5001/api/auth',
          data,
          config
        );
        setIsLoading(false);
        setError(null);
        localStorage.setItem('token', response.data.token);
        console.log(response);

        auth.login();
        navigate('/');
      } catch (err) {
        setIsLoading(false);
        console.log(err.response.data.errors);
        setError(err.response.data.errors[0].msg);
      }
    }
  };
  return (
    <>
      <Header title='Employee Management System'/>
      <div className='loginForm'>
      <h1>Sign In</h1>
      <p>Sign Into Your Account</p>
      {isLoading && <p style={{ color: 'red' }}>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={(e) => onSubmit2(e)}>
        <div>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange2(e)}
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div><br></br>
        <div>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            minLength='5'
            onChange={(e) => onChange2(e)}
          />
          {emailError && <p style={{ color: 'red' }}>{passError}</p>}
        </div><br/>

        <input type='submit' value='Login' />
      </form> <br/>
      <p>
       <b> Don't have an account? </b> <Link to='/register'>Register</Link>
      </p>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
