import React from 'react';
import '../styles/style.css';
import Logo from "../images/Screen Shot 2022-10-20 at 3.40.22 PM.png"
import Project1 from "../images/pexels-photo-3222386.jpeg"
import Project2 from "../images/pexels-photo-4194842.webp"
import Project3 from "../images/pexels-photo-3597031.jpeg"
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
                <div className="columns">
                  <a href="https://combat-arena-game.herokuapp.com/login"><img  id="first_project" src={Logo}   alt="Project Preview"/></a>
                  <img src={Project1}   alt="Project Preview"/>
                  <img src={Project2}   alt="Project Preview"/>
                </div>
                <div className="columns">
                   <img src={Project3} alt="Project Preview"/>     
                  <img src={Project4}  alt="Project Preview"/>
                  <img src={Project5}  alt="Project Preview"/> 
                </div>  
              </div>
    </div>
    
  );
}

export default Card;
