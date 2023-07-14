import React from 'react'
import { NavLink } from "react-router-dom";

import './nav.css'

export default function Nav() {

  const navList = [
    {
      name: 'Home',
      path: 'home',
    },
    {
      name: 'Add Employees',
      path: 'create'
    },
  ]

  const navigation = navList.map((item, index) => (
    <div className='list' key={index}>
      <NavLink
        to={`/${item.path}`}
        className={({ isActive }) => isActive ? 'active' : undefined}
        end
      >
        {item.name}
      </NavLink>
    </div>
  ))

  return (
    <header>
      <nav>
        {navigation}
      </nav>
    </header>
  )
}
