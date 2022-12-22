import React from 'react';
// Here we are importing a CSS file as a dependency

import LeosResume from "../images/Screen Shot 2022-12-03 at 4.33.11 PM.png"


function Resume() {
  return (


<div class="section">
            <h1><span>My Skills</span></h1>
            <ul>
                <li className="text-white">React<br /> <progress min="0" max="100" value="100"></progress> </li>
                <li className="text-white">Python<br /> <progress min="0" max="100" value="100"></progress> </li>
                <li className="text-white">HTML<br /> <progress min="0" max="100" value="100"></progress> </li>
                <li className="text-white">JAVASCRIPT<br /> <progress min="0" max="100" value="100"></progress> </li>
                <li className="text-white">CSS<br /> <progress min="0" max="100" value="100"></progress> </li>
            </ul>
            <h1><span>My Resume</span></h1>
            <a href={LeosResume} download><img id="first_project" alt="Resume"  src={LeosResume}></img></a>

        </div>
  )}



  export default Resume;