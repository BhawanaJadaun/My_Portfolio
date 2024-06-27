import React, { useState } from 'react';
import Linkedin from '../../assets/linkedin.png';
import mail from '../../assets/email.jpg';
import github from '../../assets/github.png';
import './contact.css';

function Contact() {
  const [result, setResult] = useState("");

  const accessKey = process.env.REACT_APP_ACCESS_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <div className="text-container">
        <h3>Let's Connect</h3>
        <h1>Get In Touch</h1>
        <p>
          I'm currently available to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact me anytime 24/7.
        </p>
        <div className="icon">
        <p>
    <a href="https://www.linkedin.com/in/bhawana-jadaun-801674307/" target="_blank" rel="noopener noreferrer">
    <img src={Linkedin} alt="LinkedIn" />
    LinkedIn
  </a>
  </p>
<p>
  <a href="mailto:youremail@example.com">
    <img src={mail} alt="Mail" />
    Mail
  </a>
</p>

          <p>
  <a href="https://github.com/BhawanaJadaun" target="_blank" rel="noopener noreferrer">
    <img src={github} alt="GitHub" />GitHub
  </a>
</p>

        </div>
      </div>
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" rows={4} cols={5} required></textarea>
          <button type="submit">Submit Form</button>
        </form>
        <div className="form-message">
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;

// import React, { useState } from 'react';
// import Linkedin from '../../assets/linkedin.png';
// import mail from '../../assets/email.jpg';
// import github from '../../assets/github.png';
// import './contact.css';

// function Contact() {
//   const [result, setResult] = useState("");

//   const accessKey = process.env.REACT_APP_ACCESS_KEY;

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", accessKey);

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });

//       const data = await response.json();

//       if (data.success) {
//         setResult("Form Submitted Successfully");
//         event.target.reset();
//       } else {
//         console.error("Error", data);
//         setResult(data.message);
//       }
//     } catch (error) {
//       console.error("Error", error);
//       setResult("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="contact-container">
//       <div className="text-container">
//         <h3>Let's Connect</h3>
//         <h1>Get In Touch</h1>
//         <p>
//           I'm currently available to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact me anytime 24/7.
//         </p>
//         <div className="icon">
//           <p>
//             <img src={Linkedin} alt="LinkedIn" />
//             LinkedIn
//           </p>
//           <p>
//             <img src={mail} alt="Mail" />
//             Mail
//           </p>
//           <p>
//             <img src={github} alt="GitHub" />
//             GitHub
//           </p>
//         </div>
//       </div>
//       <div className="contact-form-container">
//         <form className="contact-form" onSubmit={onSubmit}>
//           <input type="text" name="name" placeholder="Name" required />
//           <input type="email" name="email" placeholder="Email" required />
//           <textarea name="message" placeholder="Message" rows={4} cols={5}required></textarea>
//           <button type="submit">Submit Form</button>
//         </form>
//         <div className="form-message">
//         <span>{result}</span>
//       </div>
    
//       </div>
//     </div>
//   );
// }

// export default Contact;
