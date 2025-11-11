import React from 'react'
import './service.css'
import { Link, Outlet } from 'react-router-dom'

const Service = () => {
  return (
    <div className='services-container'>
      <h2 className='services-subtitle'>Our services</h2>
      <p className='services-subtitle'>Choose one of our service below.</p>

      <div className='services-links'>
        <Link to='web-development'
        className='service-link web '>Web Developement
        </Link>



        <Link to='app-development' className='service-link app'>
        App Development
        </Link>

        <Link to='design' className='service-link design'>Design</Link>
      </div>

      {/* nested route content */}
      <Outlet/>
    </div>
    
  )
}

export default Service
