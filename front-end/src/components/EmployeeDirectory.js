import React, { Component } from 'react'

import EmployeeSearch from './EmployeeSearch'
import EmployeeTable from './EmployeeTable'

import './Employee.css'
import { getEmployeeData } from '../util/DataHandler'

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

  getEmployeeData = async () => {
    const employeeData = await getEmployeeData()
    if (employeeData?.data?.employeeList) {
      this.setState({ employeeData: employeeData.data.employeeList })
    }
  }

  render() {
    const { employeeData, } = this.state

    return (
      <>
        <EmployeeSearch />
        <EmployeeTable employeeData={employeeData} />
      </>
    )
  }
}
