import '../App.css';
import React from 'react';
// import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
  //return contact form page html
    // Create state variables for the fields in the form
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;

      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'userName') {
        setFullName(inputValue);
      } else {
        setMessage(inputValue);
      }
    };


    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();

      if(!fullName || !email || !message) {
        setErrorMessage("Please fill in the empty field")
        return;
      }
      //check to see if the email is not valid. If so we set an error message to be displayed on the page.
      if (!validateEmail(email)) {
        setErrorMessage('Please enter a vaslid email');
        //exit out of this code block if something is wrong so that the user can correct it
        return;
      }
      setErrorMessage(`Thanks, {fullName} for your message! I will be in contact soon.`);

      // Clear out the input after a successful registration.
      setMessage('');
      setEmail('');
      setFullName('');
    };

    return (
        <div>
        <p idName="contactGreeting">Hello there! Please use the form below to contact me about work, collaboration, or to send me pictures of your dog.</p>
        <form className="form">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={fullName}
            name="fullName"
            onChange={handleInputChange}
            type="text"
            placeholder="full name"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="type your message here"
          />
        
          <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">Oops! Something went wrong. Please try again.</p>
          </div>
        )}
        </div>
    );
  }
// }

export default Contact;