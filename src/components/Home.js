import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Employee from './Employee';
import Header1 from './Header1';
import AddEmployeeForm from './AddEmployeeForm';
import AddEmployeeFormView from './AddEmployeeFormView';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";
import JsonApi from './JsonApi';
import {Table} from 'react-bootstrap';
import {ListGroupItem, ListGroup} from 'reactstrap';


// import { Image, View } from 'react-native';

const Home = () =>  {
  const [employee, setEmployee] = useState ([
    {
      name: '',
      id: '',
    },

  ]);

  // let previd = 0;
  // const handleAddEmployee = (name) => {
  //   previd = previd +1;
  //   console.log("### " + previd);
  //   setEmployee([
  //     ...employee,
  //     {
  //       name: name, 
  //       id: previd,
  //     },
  //   ]);
  // };

 


  return (
    <div >
    

    {/* <Image source={{ uri: "https://img.freepik.com/free-psd/fire-logo_253059-60.jpg?size=626&ext=jpg" }}  />     */}
      <Header title='Employee Management System'/> 

     <Header1 title='Employee List' />
     <NavLink to='/addemployee' > <h4 className='addemployee'>Add Employee</h4></NavLink> 
     <ListGroup>
      <ListGroupItem className="d-flex"> 
      
       <div className='col-4'>
         <h5> <strong>Name</strong> </h5>
       </div >
       <div className='col-4'>
       <h5> <strong>Email</strong> </h5>
        </div> 
        <div className='col-4'>
        <h5> <strong>Salary</strong> </h5> <br/>
        </div>
      </ListGroupItem>
      </ListGroup> 
    
    <JsonApi/>
      {/* {employee.map((g) => (
     <Employee  name={g.name} id={g.id} key={g.id.toString()} />     
      ))}
      <AddEmployeeForm addEmployee={handleAddEmployee} /> */}
      <Footer/>
    </div>
  );
}

export default Home;
