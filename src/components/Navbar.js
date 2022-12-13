import React from "react";
import logo from '../images/airbnb-logo.png'

export default function Navbar() {
  return (
    <>
      {/* <img src='' alt='react img'/> */}
      <nav>
        {/* <img src="../images/re" className="nav--icon" /> */}
        <img src={logo} alt="Logo" className="nav--icon" />
        {/* <h3 className="nav--logo_text">airbnb</h3> */}
        {/* <h4 className="nav--title">React Course - Project 1</h4> */}
      </nav>
    </>
  );
}
