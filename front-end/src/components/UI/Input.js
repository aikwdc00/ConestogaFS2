import React from 'react'

export default function Input(props) {

  const { label, input, } = props

  return (
    <div className={''}>
      <label htmlFor={input.id}>{label}</label >
      <input
        id={input.id}
        type={input.type}
        placeholder={input.placeholder}
        name={input.id}
      />
    </div >
  )
}
