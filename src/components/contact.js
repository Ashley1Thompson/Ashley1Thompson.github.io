import '../styles/App.css';
import React from 'react';
import { useRef } from 'react';
import { validateEmail } from '../utils/helpers';
import Col from 'react-bootstrap/Col';
import emailjs from '@emailjs/browser';
// import { Form } from 'react-bootstrap';

// function Contact() {
//   //return contact form page html
//     // Create state variables for the fields in the form
//     const [fullName, setFullName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleInputChange = (e) => {
//       // Getting the value and name of the input which triggered the change
//       const { target } = e;
//       const inputType = target.name;
//       const inputValue = target.value;

//       if (inputType === 'email') {
//         setEmail(inputValue);
//       } else if (inputType === 'fullName') {
//         setFullName(inputValue);
//       } else {
//         setMessage(inputValue);
//       }
//     };


//     const handleFormSubmit = (e) => {
//       // Preventing the default behavior of the form
//       e.preventDefault();

//       if(!fullName || !email || !message) {
//         setErrorMessage("Please fill in the empty field")
//         return;
//       }
//       //validate email, err if not valid
//       if (!validateEmail(email)) {
//         setErrorMessage('Please enter a vaslid email');
//         //exit out of this code block if something is wrong so that the user can correct it
//         return;
//       }
//       alert(`Thanks for your message! I will be in contact soon.`);

//       // Clear out the input after a successful registration.
//       setMessage('');
//       setEmail('');
//       setFullName('');
//     };

//     return (
//       <>
        
//           <div>
//           <p className="contactGreeting">Hello there! Please use the form below to contact me about work, collaboration, or to send me pictures of your dog 🐕</p>
//           <form className="contactForm">
//           <Col>
//             <input
//               value={email}
//               name="email"
//               onChange={handleInputChange}
//               type="email"
//               placeholder="email"
//             />
//           </Col>
//           <Col>
//             <input
//               value={fullName}
//               name="fullName"
//               onChange={handleInputChange}
//               type="text"
//               placeholder="full name"
//             />
//           </Col>
//           <Col> 
//             <input
//               value={message}
//               name="message"
//               onChange={handleInputChange}
//               type="text"
//               placeholder="type your message here"
              
//             />
//           </Col>  
          
//             <button className="submitContact" type="button" onClick={handleFormSubmit}>Submit</button>
//           </form>
//           {errorMessage && (
//             <div>
//               <p className="errorText">Oops! Something went wrong. Please try again.</p>
//             </div>
//           )}
//           </div>  
//       </>   
//     );
//   }
// // }


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a19t1c5', 'template_xbtj6mj', form.current, 'jCNgFEcrKqO14_8pH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="reply_to" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;