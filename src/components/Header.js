import React from "react";
import Logo from "../images/logo.svg";


function Header () {
  return (
    <div className="header__navbar">
      <img src={Logo} alt="" className="logo" />
      <ul className="navbar">
        <li id="features" className="navbar__item">Features</li>
        <li id="team" className="navbar__item">Team</li>
        <li id="signin" className="navbar__item">Sign In</li>
      </ul>
    </div>
  )
}

export default Header 