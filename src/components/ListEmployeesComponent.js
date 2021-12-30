import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {

  const [employees, setEmployees] = useState([])


  useEffect(() => {
    EmployeeService.getAllEmployee().then((res) =>{
      setEmployees(res.data)
    }).catch(err => console.log(err))

  }, [employees])


  const getAllEmployees = () => {
    EmployeeService.getAllEmployees().then((response) => {
        setEmployees(response.data)

    }).catch(error =>{
        console.log(error);
    })
}

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId).then((response) =>{
     getAllEmployees();

    }).catch(error =>{
        console.log(error);
    })
     
 }

  return(
    <div className='container'>
      <h2 className='text-center'>Liste des employees</h2>
      <Link to = "/add-employee" className = "btn btn-primary mb-2" > Ajouter Employee </Link>
      <table className="table table-bordered table-striped" >
            <thead>
                <tr>
                <th> Prénom  </th>
                <th> Nom</th>
                <th> Age </th>
                <th> Entreprise </th>
                <th> Actions </th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee =>
                        <tr key = {employee.id}> 
                            <td> {employee.prenom} </td>
                            <td>{employee.nom}</td>
                            <td> {employee.age} </td>
                            <td>{employee.entreprise}</td>
                            <td>
                                <button className = "btn btn-danger" onClick = {() => deleteEmployee(employee.id)}
                                style = {{marginLeft:"10px"}}> Suprimer</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
            
        </table>
    </div>
  ) 
}

export default ListEmployeeComponent