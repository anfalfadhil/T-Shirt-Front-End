import React, { useRef } from "react";

//Must install this -
//npm install emailjs-com --save

import emailjs from "emailjs-com";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tzz4lto",
        "template_5c8dbza",
        e.target,
        //   form.current,
        "user_FCEAUWpkztSboEksjq2FD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  //if order is placed render the email via ternary operator

  //make route in react based off of order completion

  return (
    <form className="form-container" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <br />
      <br />
      <label>Email</label>
      <input type="email" name="user_email" />
      <br />
      <br />
      <label>Your Message</label>
      <textarea name="message" />

      <input type="submit" value="Send" />

      <br />
      <br />
      <br />

      <div>
        Want to contact us?
        <br />
        Send email to dimilafl3@gmail.com
      </div>
    </form>
  );
};

export default ContactMe;
