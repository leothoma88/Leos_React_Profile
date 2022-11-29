import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/style.css';

function Header() {
  return (
    <div class="topnav">
            <a class="active" href="#aboutme">About Me</a>
            <a href="#myworks">My Works</a>
            <a href="#accounts">Accounts</a>
            <a href="#resources">Resources</a>
            <a href="social">Social Media</a>
            <a href="#contacts">Contact Us</a>
          </div>
  );
}

export default Header;