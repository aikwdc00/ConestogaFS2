import React from 'react'

export default function Select(props) {
  const { input, label } = props

  return (
    <div className={''}>
      <label htmlFor={input.id}>{label}</label >
      <select name={input.id} id={input.id}>
        {
          input.options.map((option, index) => <option key={index} value={option}>{option}</option>)
        }
      </select>
    </div>
  )
}
