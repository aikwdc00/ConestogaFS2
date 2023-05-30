import React from 'react'
import './Layout.css'

function Layout(props) {
  return (
    <div className='layoutContainer'>
      {props.children}
    </div>
  )
}


export default Layout

