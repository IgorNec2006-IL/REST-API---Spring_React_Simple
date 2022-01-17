import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ListEmployee = () => {

    useEffect(() => {
        getAllEmployees();
    }, []);

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId).then((response) => {
            getAllEmployees();
        }).catch((error) => {
            console.log(error);
        });
    }

    const [employees, setEmployees] = useState([]);
    return (
        <div className='container'>
            <h2 className='text-center'>List Employees</h2>
            <Link to={"/add-employee"} className='btn btn-primary mb-2'>
                Add Employee
            </Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-Mail Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            emp => 
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.firstName}</td>
                                    <td>{emp.lastName}</td>
                                    <td>{emp.emailId}</td>
                                    <td>
                                        <Link className='btn btn-info' to={`/edit-employee/${emp.id}`}>Update</Link>
                                        <button className='btn btn-danger ms-3' 
                                            onClick={() => deleteEmployee(emp.id)}>
                                                Delete
                                        </button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    )
}

export default ListEmployee;

