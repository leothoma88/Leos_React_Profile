import React from 'react';

import '../styles/style.css';

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Aboutme() {
  return (
    <div class="section">
    <h1 id="aboutme"><span>About Me</span></h1>
    <div >
        <p id="aboutmewords">Darrell spends his days curating a future already heavily invested in business development. Through great communication skills, business etiquette, established sales tactics and inviting interpersonal relationship skills, Darrell never ceases to bring life to any business venture. His works cannot be taken into full account unless coupled with the thought of his high personal standards, care for common man and above all his high regard for ethics and true grit.</p>
    </div>
    </div>
  );
}

export default Aboutme;
