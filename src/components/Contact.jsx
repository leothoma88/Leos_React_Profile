import React, { useState } from 'react';

import { validateEmail } from '../../src/utils/helpers';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
    
                if(!isValid) {
                    setErrorMessage('please enter a valid email');
                } else {
                    setErrorMessage('');
                }

            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                } 
        }

        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

return (
    <section className="section">
        <h1 id="social"><span>Follow Me</span></h1>
        <hr></hr>
        <form id="contact-form">
            <div class="mt-5" >
                <label className="text-white" htmlFor="name">Name:</label>   
            </div>
            <input class="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange}/>
            <div>
                <label className="text-white" htmlFor="email">Email Address:</label>               
            </div>
            <input class="form-control" type="email"  name="email" defaultValue={email} onBlur={handleChange} />
            <div>
                <label className="text-white" htmlFor="message">Message:</label>               
            </div> 
            <textarea class="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="7" />
           
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}
            

            <div class="mt-5 mb-5" >
            <button data-testid='button' class="btn btn-outline-dark " type="submit" onSubmit={handleSubmit} >Submit</button>
            </div>
        </form>
    </section>
    );
}
    
export default Contact