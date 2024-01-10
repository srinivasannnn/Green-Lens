import React from 'react'
import About from './Home Components/About'
import Service from './Home Components/Service'
import Landing from './Home Components/Landing'
import './Home.css'
import Products from './Home Components/Products'
import Contact from './Home Components/Contact'

export default function () {
  return (
    <div>
        <Landing/>
        <About/>
        <Service/>
        <Products/>
        <Contact/>
    </div>
  )
}
