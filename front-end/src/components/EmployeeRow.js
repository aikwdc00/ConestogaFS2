import React from 'react'

function EmployeeRow(props) {

  const { FirstName, LastName, Age, DateOfJoining, Title, Department, employeeType, currentStatus } = props.employee

  const newDate = new Date(DateOfJoining).toDateString()

  return (
    <tr>
      <td>{FirstName}</td>
      <td>{LastName}</td>
      <td>{Age}</td>
      <td>{newDate}</td>
      <td>{Title}</td>
      <td>{Department}</td>
      <td>{employeeType}</td>
      <td>{currentStatus}</td>
    </tr>
  )
}

export default EmployeeRow
