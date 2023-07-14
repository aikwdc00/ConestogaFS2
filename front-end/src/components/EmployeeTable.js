import React from 'react'
import { useParams } from "react-router-dom";

import EmployeeRow from './EmployeeRow'
import Table from './UI/Table'


function EmployeeTable(props) {
  const { employeeData } = props
  const params = useParams()
  let filterList = []

  if (!Array.isArray(employeeData) || !employeeData.length) return <p className="noFound">No employees found</p>

  if (params.filterType) {
    filterList = employeeData.filter(i => i.employeeType === params.filterType)
  } else {
    filterList = employeeData
  }

  const renderEmployee = filterList.map((employee, index) => <EmployeeRow employee={employee} key={index} />);

  return (
    <Table>
      <tbody>{renderEmployee}</tbody>
    </Table>
  )
}

export default EmployeeTable
