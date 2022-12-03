import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/style.css';
import LeosResume from "../images/Screen Shot 2022-12-03 at 4.33.11 PM.png"


function Resume() {
  return (


<div class="section">
            <h1><span>My Skills</span></h1>
            <ul>
                <li>React<br /> <progress min="0" max="100" value="100"></progress> </li>
                <li>Python<br /> <progress min="0" max="100" value="100"></progress> </li>
                <li>HTML<br /> <progress min="0" max="100" value="100"></progress> </li>
                <li>JAVASCRIPT<br /> <progress min="0" max="100" value="100"></progress> </li>
                <li>CSS<br /> <progress min="0" max="100" value="100"></progress> </li>
            </ul>
            <h1><span>My Resume</span></h1>
            <a href="/images/Screen Shot 2022-12-03 at 4.33.11 PM.png" download="Screen Shot 2022-12-03 at 4.33.11 PM.png"><img id="first_project" alt="Resume"  src={LeosResume}></img></a>

        </div>
  )}



  export default Resume;