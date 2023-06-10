import React, { Component } from 'react'

import EmployeeCreate from './EmployeeCreate'
import EmployeeSearch from './EmployeeSearch'
import EmployeeTable from './EmployeeTable'

import './Employee.css'

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
    // fetch('/ep/getEmployeeData')
    //   .then((res) => res.json())
    //   .then((data) => this.setState({ employeeData: data }))
    //   .catch(err => console.log('getEmployeeData err', err))

    fetch('/graphql', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        query: `query ExampleQuery {
          employeeList {
            FirstName
            LastName
            Title
            currentStatus
            employeeType
            Department
            DateOfJoining
            Age
          }
        }`
      })
    })
      .then((res) => res.json())
      .then((result) => this.setState({ employeeData: result.data.employeeList }))
      .catch(err => console.log('getEmployeeData err', err))
  }

  addEmployeeHandler = (e) => {
    const graphqlQuery = {
      query: `mutation EmployeeAdd($employee: EmployeeInput) {
            employeeAdd(employee: $employee) {
              Age
              FirstName
              LastName
              DateOfJoining
              Department
              Title
              currentStatus
              employeeType
            }
          }`,
      variables: {
        employee: {
          ...e,
          Age: parseInt(e.Age)
        }
      }
    };

    // const configure = {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(e)
    // }
    // fetch('/ep/postEmployeeData', configure)
    //   .then((res) => res.json())
    //   .then((employeeData) => this.setState({ employeeData }))
    //   .catch(err => console.log('getEmployeeData err', err))

    fetch("/graphql", {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(graphqlQuery)
    })
      .then(res => res.json())
      .then(result => {

        if (result.errors) {
          throw new Error(result.errors[0].message)
        }

        this.setState((prevState) => ({
          employeeData: [...prevState.employeeData, result.data.employeeAdd]
        }))
      }).catch((err) => {
        this.setState({ errors: err })
      });

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
