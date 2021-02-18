import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
      <header >
        <h1>{props.title}</h1>

       <span className='stats'> <NavLink to='/'>Home</NavLink> </span>
       <span className='stats'><NavLink to='/about'>About</NavLink> </span>
       <span className='stats'><NavLink to='/contact'>Contact</NavLink> </span>
            
      </header>
    );
  };
  
  export default Header;
  