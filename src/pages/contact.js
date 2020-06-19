import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function About() {
  return <div>
      <Header headerText="AboutGatsby"/>
      <Header headerText="It's pretty cool"/>
      <p style={{color:`teal`}}>Send US message</p>
      <Link to='/'>Home</Link>
  </div>
}
