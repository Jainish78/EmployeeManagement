import React from 'react';
import ProjectAPI from './ProjectAPI';
import Header from './Header';
import Footer from './Footer';
import Header1 from './Header1';
import { NavLink } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";
import {ListGroupItem, ListGroup} from 'reactstrap';

const Project = (props) => {
  
  return (
    <div className='project'>
        <Header title='Employee Management System'/> 

<Header1 title='Project List'/>
<span ><NavLink to='/addproject'> <h4>Add Project</h4></NavLink> </span>
      
<ListGroup>
      <ListGroupItem className="d-flex"> 
      
       <div className='col-4'>
         <h5> <strong>Name</strong> </h5>
       </div >
       <div className='col-4'>
       <h5> <strong>Detail</strong> </h5>
        </div> 
        <div className='col-4'>
        <h5> <strong>Duration</strong> </h5> <br/>
        </div>
      </ListGroupItem>
      </ListGroup> 
      
    
    <ProjectAPI/>
    <Footer/> 
    </div>
  );
};

export default Project;
