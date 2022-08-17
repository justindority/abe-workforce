const API = "http://localhost:8088"

const applicationState = {}

export const getApplicationState = () => {
    return structuredClone(applicationState)
}

//create api call to grab employees
export const fetchEmployees = () => {
    return fetch(`${API}/employees`)
    .then(response => response.json())
    .then(
        (employees) => {
            // Store the external state in application state
            applicationState.employees = employees
        }
    )
}

//create api call to grab computers
export const fetchComputers = () => {
    return fetch(`${API}/computers`)
    .then(response => response.json())
    .then(
        (computers) => {
            // Store the external state in application state
            applicationState.computers = computers
        }
    )
}

//create api call to grab departments
export const fetchDepartments = () => {
    return fetch(`${API}/departments`)
    .then(response => response.json())
    .then(
        (departments) => {
            // Store the external state in application state
            applicationState.departments = departments
        }
    )
}

//create api call to grab offices
export const fetchOffices = () => {
    return fetch(`${API}/offices`)
    .then(response => response.json())
    .then(
        (offices) => {
            // Store the external state in application state
            applicationState.offices = offices
        }
    )
}

//create api call to grab customers
export const fetchCustomers = () => {
    return fetch(`${API}/customers`)
    .then(response => response.json())
    .then(
        (customers) => {
            // Store the external state in application state
            applicationState.customers = customers
        }
    )
}

//create api call to grab employeeCustomers
export const fetchEmployeeCustomers = () => {
    return fetch(`${API}/employeeCustomers`)
    .then(response => response.json())
    .then(
        (employeeCustomers) => {
            // Store the external state in application state
            applicationState.employeeCustomers = employeeCustomers
        }
    )
}