import React, { Component } from 'react'

import EmployeeCreate from './EmployeeCreate'
import EmployeeSearch from './EmployeeSearch'
import EmployeeTable from './EmployeeTable'

import './Employee.css'

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
    currentStatus: 2
  }
]

export default class EmployeeDirectory extends Component {
  constructor() {
    super()
    this.state = {
      EmployeeData: employeeData,
    }
  }

  addEmployeeHandler = (e) => {

    console.log('e', e)

    this.setState(prevSate => {
      return {
        EmployeeData: [
          ...prevSate.EmployeeData,
          { ...e, currentStatus: prevSate.EmployeeData.length + 1 }
        ]
      }
    })
  }

  render() {
    const { EmployeeData } = this.state
    return (
      <div>
        <EmployeeSearch />
        <EmployeeCreate addEmployeeHandler={this.addEmployeeHandler} />
        <EmployeeTable employeeData={EmployeeData} />
      </div>
    )
  }
}
