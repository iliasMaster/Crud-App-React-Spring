import React, {useState} from 'react'
import {Link, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {

    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [age, setAge] = useState('')
    const [entreprise, setEntreprise] = useState('')
    const navigate = useNavigate();


    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = {prenom, nom, age, entreprise}

            EmployeeService.createEmployee(employee).then((response) =>{
                   
                navigate('/employees');
    
            }).catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h2 className = "text-center">Ajouter Employee</h2>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Prénom :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter votre prenom"
                                        name = "prenom"
                                        className = "form-control"
                                        value = {prenom}
                                        onChange = {(e) => setPrenom(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Nom :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter votre nom"
                                        name = "Nom"
                                        className = "form-control"
                                        value = {nom}
                                        onChange = {(e) => setNom(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Age :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter votre age"
                                        name = "age"
                                        className = "form-control"
                                        value = {age}
                                        onChange = {(e) => setAge(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Entreprise :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter votre entreprise"
                                        name = "entreprise"
                                        className = "form-control"
                                        value = {entreprise}
                                        onChange = {(e) => setEntreprise(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success me-3"  onClick = {(e) => saveEmployee(e)} >Submit </button>
                                <Link to="/employees" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddEmployeeComponent