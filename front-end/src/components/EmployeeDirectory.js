import React, { Component } from 'react'

import EmployeeCreate from './EmployeeCreate'
import EmployeeSearch from './EmployeeSearch'
import EmployeeTable from './EmployeeTable'

import './Employee.css'

// const employeeData = [
//   {
//     FirstName: 'Demo',
//     LastName: 'Demo',
//     Age: 20,
//     DateOfJoining: 'Jan-1-2000',
//     Title: 'Manager',
//     Department: 'IT',
//     employeeType: 'fulltime',
//     currentStatus: 1
//   },
//   {
//     FirstName: 'Demo2',
//     LastName: 'Demo2',
//     Age: 20,
//     DateOfJoining: 'Jan-1-2000',
//     Title: 'Manager',
//     Department: 'IT',
//     employeeType: 'fulltime',
//     currentStatus: 2
//   }
// ]

export default class EmployeeDirectory extends Component {
  constructor() {
    super()
    this.state = {
      employeeData: null,
    }
  }

  componentDidMount() {
    this.getEmployeeData()
  }

  getEmployeeData = () => {
    fetch('/employee/getEmployeeData')
      .then((res) => res.json())
      .then((data) => this.setState({ employeeData: data }))
      .catch(err => console.log('getEmployeeData err', err))
  }

  addEmployeeHandler = (e) => {

    const configure = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(e)
    }

    fetch('/employee/postEmployeeData', configure)
      .then((res) => res.json())
      .then((employeeData) => this.setState({ employeeData }))
      .catch(err => console.log('getEmployeeData err', err))

    // this.setState(prevSate => ({
    //   employeeData: [
    //     ...prevSate.employeeData,
    //     { ...e, currentStatus: prevSate.employeeData.length + 1 }
    //   ]
    // }))
  }

  render() {
    const { employeeData } = this.state
    return (
      <div>
        <EmployeeSearch />
        <EmployeeCreate addEmployeeHandler={this.addEmployeeHandler} />
        <EmployeeTable employeeData={employeeData} />
      </div>
    )
  }
}
