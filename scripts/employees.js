import { findComputer } from "./computers.js"
import { findCustomers } from "./customers.js"
import { findDepartment } from "./departments.js"
import { findOffice } from "./office.js"

export const employeesHtml = (applicationState) => {
    return `
    ${
        applicationState.employees.map((employee) => {
            let foundComputer = findComputer(employee, applicationState)
            let foundDepartment = findDepartment(employee, applicationState)
            let foundOffice = findOffice(employee, applicationState)
            return `<div class="employee><header class="employee-name"><h2>${employee.firstName} ${employee.lastName}</h2></header>
            <section class="employee-computer">Currently using a ${foundComputer.year} ${foundComputer.model}</section>
            <section class="employee-department">Works in the ${foundDepartment.name} department</section>
            <section class="employee-location">Works at the ${foundOffice.name} office</section>
            <section class="employee-customers">Has worked for the following customers:<ul>${findCustomers(employee,applicationState)}</ul></section>
            </div>`
        }).join("")
    }`
}


export const findEmployees = (cust,state) => {
    let relationships = state.employeeCustomers.filter(rel => {return cust.id === rel.customerId})

    // Find the related customer for each relationship
    let empHtml = relationships.map(rel => {
        let foundEmployee = state.employees.find(emp => {return emp.id === rel.employeeId})
        return `<li>${foundEmployee.firstName} ${foundEmployee.lastName}</li>`
    }).join("")
    return empHtml 
}