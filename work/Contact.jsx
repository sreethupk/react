// import React from "react";

// const Contact = () => {
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert("Message sent successfully!");
//     };

//     return (
//         <div className="page-container">
//             <h2>Contact Us</h2>
//             <p>Please fill out the form below.</p>

//             <form className="contact-form" onSubmit={handleSubmit}>
//                 <input type="text" placeholder="Enter your name" required />
//                 <input type="email" placeholder="Enter your email" required />
//                 <textarea placeholder="Enter your message" rows="5" required></textarea>
//                 <button type="submit">Send Message</button>
//             </form>
//         </div>  
//     );
// };

// export default Contact;
import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="page-container contact-bg">
      <div className="overlay">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you. Fill out the form below to get in touch!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email" required />
          <textarea placeholder="Enter your message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
