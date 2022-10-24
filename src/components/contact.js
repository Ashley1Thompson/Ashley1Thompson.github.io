import '../styles/App.css';
import React from 'react';
import { useRef } from 'react';
// import { validateEmail } from '../utils/helpers';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  // prevent default behavior of form to retain user input in the fields
  const sendEmail = (e) => {
    e.preventDefault();

  //parameters for emailJS from my service and template setup info
    emailjs.sendForm('service_a19t1c5', 'template_xbtj6mj', form.current, 'jCNgFEcrKqO14_8pH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
<>
    <div>
    <p className="contactGreeting">
    Hello there! Use the form below to drop me a line about collaboration or work opportunities, or to send me pictures of your dog 🐕 
    </p>
    </div>
    {/* //name params MUST MATCH those in the template on emailJS site or it won't return that information (ie name, return email) in the email it sends. */}
    <form className="contactForm" ref={form} onSubmit={sendEmail}>
      <label className='formLabel'>Name</label>
      <input type="text" name="from_name" />
      <label className='formLabel'>Email</label>
      <input type="email" name="reply_to" />
      <label className='formLabel'>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" className="submitBtn"/>
    </form>
</>  
  );
};

export default Contact;