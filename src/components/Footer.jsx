import React from 'react';
import '../styles/style.css';


// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Footer() {
  return (
 
    <div className="section" id="contacts">
        <h1 id="social"><span>Follow Me</span></h1>

         <div>
            <a href="null" target="_blank">
            <img alt="Instagram" src="https://img.icons8.com/cute-clipart/100/instagram-new.png"/>
            </a>
            <a href="null">
            <img alt="Twitter" src="https://www.sololearn.com/Uploads/icons/twitter.png" />
            </a>
            <a href="null">
            <img alt="GitHub" src="https://img.icons8.com/nolan/144/github.png"/>
            </a>
            <a href="null">
            <img alt="Telegram" src="https://img.icons8.com/fluent/96/000000/telegram-app.png"/>
            </a>
            <a href="null">
            <img alt="YouTube" src="https://img.icons8.com/color/96/000000/youtube-play.png"/>
            </a>
              
        </div> 
    <a href="mailto:leothoma88@gmail.com">
        <img src="https://img.icons8.com/fluent/95/000000/gmail--v2.png" alt='Gmail'/>
        </a>

    </div>

 
  );
}

export default Footer;
