import React from 'react'
import "./style.css"

function Navbar() {
  return (
<div className="topnav">
  <a className="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
  <div className="login-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Username" name="username"/>
      <input type="text" placeholder="Password" name="psw"/>
      <button type="submit">Login</button>
    </form>
  </div>
</div>
  )
}

export default Navbar