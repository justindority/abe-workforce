
export const findComputer = (employee, state) => {
    return state.computers.find((pc) => {return pc.id === employee.computerId})
}