import React from 'react'
import Nav from "../components/nav"
import { TelephoneFill } from 'react-bootstrap-icons'

const contact = () => {
  return (
    <div className="main">
      <Nav />
      <div className="mid">
        <h1 className="text-[1.8em]">Next JS Routing</h1>
        <TelephoneFill className="icon" />
        <h1 className="text-[1.5em]">Contact</h1>
      </div>
    </div>
  )
}

export default contact