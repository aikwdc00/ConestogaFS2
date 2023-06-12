import React from 'react'
import EmployeeRow from './EmployeeRow'

function EmployeeTable(props) {
  const { employeeData } = props

  if (!Array.isArray(employeeData) || !employeeData.length) return <p className="noFound">No employees found</p>

  const renderEmployee = employeeData.map((employee, index) => <EmployeeRow employee={employee} key={index} />);

  return (
    <table>
      <thead>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Age</th>
          <th>DateOfJoining</th>
          <th>Title</th>
          <th>Department</th>
          <th>employeeType</th>
          <th>CurrentStatus</th>
        </tr>
      </thead>
      <tbody>{renderEmployee}</tbody>
    </table>
  )
}

export default EmployeeTable
