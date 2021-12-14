import React from "react";
import "./Employee.scss";
import Counter  from "../Counter/Counter";
import team from "../../data/employee";


const Employee = (props) => {
  const {employees} = props
  const EmployeeCard = employees.map ((team, index )=> {
    return  <div className="Employee" key = {"Employee" + index}>
    <h3 className="Employee_details"> Name: {team.name} </h3>  
    <h3 className="Employee_role"> Role: {team.role} </h3>
    <Counter /> 
         </div>
    })


return (
 <> <div className= "Employee__cards"> {EmployeeCard}</div> 
</>
 
  )
}



export default Employee

// create a map function 