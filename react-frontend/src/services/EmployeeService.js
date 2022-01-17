import axios from 'axios';

const EMPLOYEES_BASE_REST_API_URL = 'http://localhost:8080/api/v1/employees';

class EmployeeService {

    getAllEmployees(){
        return axios.get(EMPLOYEES_BASE_REST_API_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEES_BASE_REST_API_URL, employee);
    }

    getEmployeeById(employeeId) {
        return axios.get(EMPLOYEES_BASE_REST_API_URL + '/' + employeeId);
    }

    updateEmployee(employeeId, employee) {
        return axios.put(EMPLOYEES_BASE_REST_API_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEES_BASE_REST_API_URL + '/' + employeeId);
    }

}

export default new EmployeeService();