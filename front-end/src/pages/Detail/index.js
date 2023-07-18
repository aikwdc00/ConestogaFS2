import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import './detail.css'
import { getEmployee } from '../../util/DataHandler'
import { updateEmployeeHandler } from '../../util/DataHandler'

const inputType = [
  {
    id: 'Title',
    type: 'text',
    placeholder: 'Title.',
    options: ['Employee', 'Manager', 'Director', 'VP'],
  },
  {
    id: 'Department',
    type: 'text',
    placeholder: 'Department.',
    options: ['IT', 'Marketing', 'HR', 'Engineering'],
  },
  {
    id: 'employeeType',
    type: 'text',
    placeholder: 'employeeType.',
    options: ['FullTime', 'PartTime', 'Contract', 'Seasonal'],
  },
]

const Detail = () => {
  const [employee, setEmployee] = useState([])
  const [isEditable, setIsEditable] = useState(false)
  const { employeeId } = useParams()

  useEffect(() => {
    async function getData() {
      const data = await getEmployee(employeeId);
      if (data) {
        await setEmployee(data);
      }
    }

    getData();
  }, [employeeId, isEditable])

  const showList = () => {
    return Object.keys(employee).map((e, i) => {
      if (e === '_id') return false
      return (
        <div className={`from-group`} key={i}>
          <label htmlFor={e}>{e}</label >
          {
            isEditable && ['Title', 'Department', 'employeeType'].includes(e) ? (
              inputType.map((type, idx) => (
                type.id === e && (
                  <select name={e} id={e} key={idx} defaultValue={employee[e]}>
                    {
                      type.options.map((option, index) => <option key={index} value={option} >{option}</option>)
                    }
                  </select>
                )
              ))
            ) : (
              <input
                id={e}
                type={`text`}
                name={e}
                value={employee[e]}
                disabled
              />
            )
          }
        </div>
      )
    })
  }

  const saveHandler = async (e) => {
    e.preventDefault()

    const form = document.forms.detailForm
    const { Title, Department, employeeType } = form

    const result = await updateEmployeeHandler(
      {
        id: employeeId,
        Title: Title.value,
        Department: Department.value,
        employeeType: employeeType.value,
      })

    if (result) {
      setIsEditable(!isEditable)
    }

  }

  return (
    <div className='detailContainer' >
      <form name="detailForm" className='formContainer' onSubmit={saveHandler}>
        {showList()}
        {isEditable && <button >Save</button>}
      </form>

      {!isEditable && <button onClick={() => setIsEditable(!isEditable)}>Edit</button>}
    </div>
  )
}

export default Detail