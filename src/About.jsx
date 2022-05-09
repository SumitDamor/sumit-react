import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  const linking =()=>{
    <NavLink/>
  }
  return (
   <>
<h1>Router About Component Ko Render Krr Raha Hai</h1>
    <button onClick={linking}>Click me</button>
   </> 
  )
}

export default About