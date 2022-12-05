import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/style.css';
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="topnav">
            <Link className="active" to='/Leos_React_Profile'>About Me</Link>
            <Link className="active" to='/portfolio'>Portfolio</Link>
            <Link className="active" to='/contact'>Contact Me</Link>
            <Link className="active" to='/resume'>Resume</Link>
          </div>
  );
}

export default Navbar;