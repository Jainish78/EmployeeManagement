import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddEmployeeForm from './AddEmployeeForm';
import * as ReactBootStrap from "react-bootstrap";
import {ListGroupItem, ListGroup} from 'reactstrap';

const ProjectAPI = () => {
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:5001/api/projects').then((response) => {
      setPosts(response.data);
      console.log(response);
    });
}, []);

  
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
          <h6> {props.post.detail}</h6> 
        </div> 
        <div className='col-4'>
          <h6> {props.post.duration}</h6> <br/>
        </div>
      </ListGroupItem>
      </ListGroup> 
  );
};


export default ProjectAPI;
