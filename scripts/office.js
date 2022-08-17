
export const findOffice = (employee, state) => {
    return state.offices.find(off => {return off.id === employee.officeId})
}