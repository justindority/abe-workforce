import { fetchComputers, fetchEmployees, getApplicationState, fetchDepartments, fetchOffices, fetchCustomers, fetchEmployeeCustomers } from "./dataAccess.js"
import { smallBusiness } from "./smallBusiness.js"

const mainContainer = document.querySelector("#container")

export const render = () => {
    fetchComputers()
    .then(() => fetchEmployees())
    .then(() => fetchDepartments())
    .then(() => fetchOffices())
    .then(() => fetchCustomers())
    .then(() => fetchEmployeeCustomers())
    .then(
        () => {
            let applicationState = getApplicationState()
            mainContainer.innerHTML = smallBusiness(applicationState)
        }
    )
}

render()
