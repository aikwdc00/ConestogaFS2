import React from 'react'

export default function Table(props) {

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
      {props.children}
    </table>
  )
}
