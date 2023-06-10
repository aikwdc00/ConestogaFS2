export const employeeData = [
  {
    FirstName: 'Demo',
    LastName: 'Demo',
    Age: 20,
    DateOfJoining: 'Jan-1-2000',
    Title: 'Manager',
    Department: 'IT',
    employeeType: 'fulltime',
    currentStatus: 1
  },
  {
    FirstName: 'Demo2',
    LastName: 'Demo2',
    Age: 20,
    DateOfJoining: 'MAY-1-2023',
    Title: 'Manager',
    Department: 'IT',
    employeeType: 'fulltime',
    currentStatus: 1,
  }
]

export const addEmployeeData = (data) => {

  const newEmployee = {
    ...data,
  }
  employeeData.push(newEmployee)
}