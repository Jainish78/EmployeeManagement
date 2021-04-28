import React, {useContext} from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import AuthContext from '../contexts/AuthContext';


const Header = (props) => {
  const auth = useContext(AuthContext);
  return (
 <div className='header row'>
  <div className='col-2'>
  <p className='logo'>EMS</p>
  </div>
  <div className='col-7 header-title'>
        <h1>{props.title}</h1>
  </div>


  <div  className='header-nav row'>
       <span > <NavLink to='/' className='col-1 a'>Home</NavLink> </span>
       <span ><NavLink to='/about'className='col-0.5 a'>About</NavLink> </span>
       <span ><NavLink to='/contact'className='col-1 a'>Contact</NavLink> </span>
       {auth.isLoggedIn && (
       
       <span ><NavLink to='/project'className=''>Projects</NavLink> </span>)}
      {auth.isLoggedIn ? (
          <li>
            <button onClick={auth.logout}>Logout</button>
          </li>
        ) : (
       <span ><NavLink to='/login'className='col-1 a'>Login</NavLink> </span> )}
  </div>

  </div> 
  )
        };
  
  export default Header;
