import React from 'react';
import AddEmployeeForm from './AddEmployeeForm';
import Footer from './Footer';
import Header from './Header';

const AddEmployeeFormView = () => {
    return (
        <div>
            <Header title='Employee Management System'/> 
        <AddEmployeeForm></AddEmployeeForm>
        <Footer/>
      </div>
    );
  };
  
  export default AddEmployeeFormView;
  