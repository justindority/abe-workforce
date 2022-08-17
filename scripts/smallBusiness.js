import { customersHtml } from "./customers.js";
import { employeesHtml } from "./employees.js";

export const smallBusiness = (applicationState) => {
    return `<div class="employee-report-div"><h1>Employee Report</h1>${employeesHtml(applicationState)}</div>
            <div class="customer-report-div"><h1>Customer Report</h1>${customersHtml(applicationState)}</div>`
}