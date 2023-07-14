import React from 'react'
import { useNavigate, Link } from "react-router-dom";

import { DeleteEmployee } from '../util/DataHandler'

function EmployeeRow(props) {
  const navigate = useNavigate()
  if (!props.employee) return
  const { _id, FirstName, LastName, Age, DateOfJoining, Title, Department, employeeType, currentStatus } = props.employee

  const newDate = new Date(DateOfJoining).toDateString()

  // const jumpDetail = () => {
  //   navigate(`/${_id}`)
  // }

  const deleteOne = async () => {
    const result = await DeleteEmployee(_id)
    if (!result._id) {
      navigate(`/`)
    }
  }

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
      <td><Link to={`/${_id}`}><span>Detail</span></Link></td>
      {/* <td><button onClick={jumpDetail}>Detail</button></td> */}
      <td><button onClick={deleteOne}>Delete</button></td>
    </tr>
  )
}

export default EmployeeRow
