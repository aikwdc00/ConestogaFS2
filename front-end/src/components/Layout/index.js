import React from 'react'
import './Layout.css'
import Navigation from '../Nav'

import { Outlet, } from 'react-router-dom';

function Layout(props) {
  return (
    <div className='layoutContainer'>
      <Navigation />
      <main className='layoutContainer'>
        <Outlet />
      </main>
    </div>
  )
}


export default Layout

