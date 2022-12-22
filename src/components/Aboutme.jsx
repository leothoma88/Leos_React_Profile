import React from 'react';
import Profile from "../images/IMG_1652.jpg"


function Aboutme() {
  return (
    <div className="section">
      <div id="header" className="section">
             <img alt="logo" className="img-circle" src={Profile}/>  
        </div>
    <h1 id="aboutme"><span>About Me</span></h1>
    
    <div className='flex justify-center items-center'>
        <div className='w-96' id="aboutmewords">Darrell spends his days curating a future already heavily invested in business development. Through great communication skills, business etiquette, established sales tactics and inviting interpersonal relationship skills, Darrell never ceases to bring life to any business venture. His works cannot be taken into full account unless coupled with the thought of his high personal standards, care for common man and above all his high regard for ethics and true grit.</div>
    </div>
    </div>
  );
}

export default Aboutme;
