import React from 'react';

import Logo from "../images/Screen Shot 2022-10-20 at 3.40.22 PM.png"
import Project1 from "../images/Screen Shot 2022-12-22 at 12.12.23 PM.png"
import Project2 from "../images/pexels-photo-4194842.webp"
import Project3 from "../images/Screen Shot 2022-12-22 at 12.03.44 PM.png"
import Project4 from "../images/pexels-photo-1187766.jpg"
import Project5 from "../images/pexels-photo-4297438.jpeg"
// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Card() {
  return (
    <div className="section" id="res">
            <h1 id="myworks"><span>My Work</span></h1>

              <div className="row">
              <a className='hover:opacity-50' href="https://combat-arena-game.herokuapp.com/login"><img  id="first_project" src={Logo}   alt="Project Preview"/></a>
                <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 ">
                  <div><a className='hover:opacity-50' href="https://giveback-app2.herokuapp.com/"><img className="h-90 md:h-full" src={Project1} alt="Project Preview2"/></a></div>
                  <a className='hover:opacity-50' href="https://shawnbandy.github.io/SwiftNews/"><img className="h-90 md:h-full" src={Project3} alt="Project Preview"/></a>    
                  <a className='hover:opacity-50'><img src={Project4}  alt="Project Preview"/></a>
                  <a className='hover:opacity-50'><img src={Project5}  alt="Project Preview"/></a>
                </div>
                <div className="columns">
                   
                </div>  
              </div>
    </div>
    
  );
}

export default Card;
