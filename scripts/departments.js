
export const findDepartment = (employee, state) => {
    return state.departments.find(dept => {return dept.id === employee.departmentId})
}