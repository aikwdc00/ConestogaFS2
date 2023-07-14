import React, { Component, } from 'react'
import { Navigate } from "react-router-dom";

import Input from './UI/Input';
import Select from './UI/Select';

import { addEmployeeHandler } from '../util/DataHandler'

const inputType = [
  {
    id: 'FirstName',
    type: 'text',
    placeholder: 'FirstName.',
    options: [],
  },
  {
    id: 'LastName',
    type: 'text',
    placeholder: 'LastName.',
    options: [],
  },
  {
    id: 'Age',
    type: 'text',
    placeholder: 'Age.',
    options: [],
  },
  {
    id: 'DateOfJoining',
    type: 'date',
    placeholder: 'DateOfJoining.',
    options: [],
  },
  {
    id: 'Title',
    type: 'text',
    placeholder: 'Title.',
    options: ['Please choose a title', 'Employee', 'Manager', 'Director', 'VP'],
  },
  {
    id: 'Department',
    type: 'text',
    placeholder: 'Department.',
    options: ['Please choose Department', 'IT', 'Marketing', 'HR', 'Engineering'],
  },
  {
    id: 'employeeType',
    type: 'text',
    placeholder: 'employeeType.',
    options: ['Please choose employee Type', 'FullTime', 'PartTime', 'Contract', 'Seasonal'],
  },
]

export default class EmployeeCreate extends Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      redirect: false,
    }
  }

  submitHandler = async (e) => {
    e.preventDefault()

    const errors = []
    const form = document.forms.addEmployeeFrom
    const { FirstName, LastName, Age, DateOfJoining, Title, Department, employeeType } = form

    const fnTest = /[a-zA-z]{3,20}/
    const fnErr = !fnTest.test(FirstName.value) ? 'First Name formatting is wrong.' : ''
    fnErr && errors.push(fnErr)

    const lnTest = /[a-zA-z]{3,20}/
    const lnErr = !lnTest.test(LastName.value) ? 'Last Name formatting is wrong.' : ''
    lnErr && errors.push(lnErr)

    const ageErr = (!(Number(Age.value) > 18 && Number(Age.value) < 70) || isNaN(Number(Age.value))) ? 'Age formatting is wrong' : ''
    ageErr && errors.push(ageErr)

    const dateTest = /\d{4}-\d{2}-\d{2}/
    const dateErr = !dateTest.test(DateOfJoining.value) ? 'Date Of Joining formatting is wrong.' : ''
    dateErr && errors.push(dateErr)

    const titleErr = (!Title.value || Title.value === 'Please choose a title') ? 'Title formatting is wrong' : ''
    titleErr && errors.push(titleErr)

    const dpErr = (!Department.value || Department.value === 'Please choose Department') ? 'Department formatting is wrong' : ''
    dpErr && errors.push(dpErr)

    const emErr = (!employeeType.value || employeeType.value === 'employeeType') ? 'employeeType formatting is wrong' : ''
    emErr && errors.push(emErr)

    this.setState({
      errors: errors.length ? errors : []
    })

    if (!errors.length) {
      const result = await addEmployeeHandler({
        FirstName: FirstName.value,
        LastName: LastName.value,
        Age: Age.value,
        DateOfJoining: DateOfJoining.value,
        Title: Title.value,
        Department: Department.value,
        employeeType: employeeType.value,
      })

      form.FirstName.value = ''
      form.LastName.value = ''
      form.Age.value = ''
      form.DateOfJoining.value = ''
      form.Title.value = 'Please choose a title'
      form.Department.value = 'Please choose Department'
      form.employeeType.value = 'Please choose employee Type'

      if (result) {
        this.setState({ redirect: true });
      }
    }
  }

  render() {
    const { errors, redirect } = this.state

    if (redirect) {
      /* class 無法像hook 一樣直接調用 redirect or useNavigate
       故在 render 方法中使用 Navigate 組件進行跳轉 */
      return <Navigate to="/home" />;
    }

    return (
      <>
        <ul>
          {
            errors.length ? errors.map((err, index) => (
              err && <li key={index}>{err}</li>
            )) : null
          }
        </ul>

        <form name="addEmployeeFrom" onSubmit={this.submitHandler}>
          {
            inputType.map((input, index) => (
              input?.options.length ? (
                <Select key={index} label={input.id} input={input} />
              ) : (
                <Input key={index} label={input.id} input={input} />
              )
            ))
          }

          <button>Submit</button>
        </form>
      </>
    )
  }
}
