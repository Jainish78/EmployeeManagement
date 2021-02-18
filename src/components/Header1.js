import React from 'react';


const Header1 = (props) => {
    return (
      <header className='header1' >
          <center>
          <h1>{props.title}</h1>
          </center>
        
          <span className='stats'>Items: {props.totalEmployees}</span>
      </header>
    );
  };
  
  export default Header1;
  