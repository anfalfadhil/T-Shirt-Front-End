import React, { useRef } from "react";

//Must install this -
//npm install emailjs-com --save

import emailjs from "emailjs-com";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
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
    // code to render form

    // {
    //     //   ifCheckoutComplete (filler variable)
    //     //    ?
    //     //     <p>Render Image Tag Here</p> : null
    //        }

    <form className="form-container" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Items Wanted</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
