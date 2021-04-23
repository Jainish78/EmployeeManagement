import React from 'react';
import AddProjectForm from './AddProjectForm';
import Footer from './Footer';
import Header from './Header';

const AddProjectFormView = () => {
    return (
        <div>
            <Header title='Employee Management System'/> 
        <AddProjectForm></AddProjectForm>
        <Footer/>
      </div>
    );
  };
  
  export default AddProjectFormView;
  