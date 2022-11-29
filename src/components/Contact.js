import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/style.css';

function Contact() {
  return (
    <div class="section" id="contacts">
    <h1><span>Contact Us</span></h1>
    <a href="mailto:leothoma88@gmail.com">
        <img src="https://img.icons8.com/fluent/95/000000/gmail--v2.png" alt='Gmail'/>
        </a>
    </div>
  );
}

export default Contact;