import React from 'react'
import Nav from "../components/nav"
import { BarChartFill } from 'react-bootstrap-icons'

const services = () => {
  return (
    <div className="main">
      <Nav />
      <div className="mid">
        <h1 className="text-[1.8em]">Next JS Routing</h1>
        <BarChartFill className="icon" />
        <h1 className="text-[1.5em]">Services</h1>
      </div>
    </div>
  )
}

export default services