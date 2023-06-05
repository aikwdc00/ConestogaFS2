const employeeData = [
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
    DateOfJoining: 'Jan-1-2000',
    Title: 'Manager',
    Department: 'IT',
    employeeType: 'fulltime',
    currentStatus: 1,
  }
]

const addEmployeeData = (data) => {

  const newEmployee = {
    ...data,
    currentStatus: 1
  }
  employeeData.push(newEmployee)
}

module.exports = {
  employeeData,
  addEmployeeData
}