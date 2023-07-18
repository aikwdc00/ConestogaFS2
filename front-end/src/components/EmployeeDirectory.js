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
      filterData: null,
    }
  }

  componentDidMount() {
    this.getEmployeeData()
  }

  getEmployeeData = async () => {
    const employeeData = await getEmployeeData()
    if (employeeData?.data?.employeeList) {
      this.setState({
        employeeData: employeeData.data.employeeList,
        filterData: employeeData.data.employeeList
      })
    }
  }

  getFilter = (item) => {
    const { employeeData } = this.state

    const filterList = employeeData.filter((emp) => emp.employeeType === item)
    if (item === 'All') {
      this.getEmployeeData()
    } else {
      this.setState({
        filterData: filterList
      })
    }
  }

  render() {
    const { employeeData, filterData } = this.state

    return (
      <>
        <EmployeeSearch onFilter={this.getFilter} />
        <EmployeeTable employeeData={filterData} />
      </>
    )
  }
}
