import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Employee from './Employee';
import Header1 from './Header1';
import AddEmployeeForm from './AddEmployeeForm';
const Home = () =>  {
  const [employee, setEmployee] = useState ([
    {
      name: '',
      id: '',
    },

  ]);

  let previd = 0;
  const handleAddEmployee = (name) => {
    setEmployee([
      ...employee,
      {
        name: name, 
        id: (previd += 1),
      },
    ]);
  };

  return (
    <div>
        
      <Header title='Employee Management System'/> 

     <Header1 title='Employee List' totalEmployees={employee.length-1}/>

      {employee.map((g) => (
     <Employee  name={g.name} id={g.id} key={g.id.toString()} />     
      ))}
      <AddEmployeeForm addEmployee={handleAddEmployee} />
      <Footer />
    </div>
  );
}

export default Home;
