import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddEmployeeForm from './AddEmployeeForm';
import * as ReactBootStrap from "react-bootstrap";
import {ListGroupItem, ListGroup} from 'reactstrap';
import AddEmployeeFormView from './AddEmployeeFormView';


const JsonApi = () => {
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:5001/api/employees').then((response) => {
      setPosts(response.data);
      console.log(response);
    });
}, []);

  //add task sample
  // const addTask = async (e) => {
  //   e.preventDefault();

  //   let token = localStorage.getItem('token');
  //   let config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'x-auth-token': token,
  //     },
  //   };

  //   let data = {
  //     title,
  //     description,
  //   };
  //   try {
  //     const response = await axios.post(
  //       'http://localhost:5000/api/tasks',
  //       data,
  //       config
  //     );

  //     console.log('task added');
  //   } catch (e) {
  //     console.log(e.response.data.errors);
  //   }
  // };
  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
      
    </div>
  );
};



const Post = (props) => {
  return (
   
    <ListGroup>
      <ListGroupItem className="d-flex"> 
      
       <div className='col-4'>
          <h6> {props.post.name} </h6>
       </div >
       <div className='col-4'>
          <h6> {props.post.email}</h6> 
        </div> 
        <div className='col-4'>
          <h6> {props.post.salary}</h6> <br/>
        </div>
      </ListGroupItem>
      </ListGroup> 
    
  );

};


export default JsonApi;
