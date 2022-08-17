import { findEmployees } from "./employees.js"


export const findCustomers = (employee,state) => {

    let relationships = state.employeeCustomers.filter(rel => {return employee.id === rel.employeeId})

    // Find the related customer for each relationship
    let custHtml = relationships.map(rel => {
        let foundCustomer = state.customers.find(cust => {return cust.id === rel.customerId})
        return `<li>${foundCustomer.name}</li>`
    }).join("")
    return custHtml

}


export const customersHtml = (state) => {
    return `
    ${
        state.customers.map((cust) => {
            return `<div class="customer><header class="customer-name"><h2>${cust.name}</h2></header>
            <section class="customer-customers">Has worked with the following employees:<ul>${findEmployees(cust,state)}</ul></section>
            </div>`
        }).join("")
    }`
}