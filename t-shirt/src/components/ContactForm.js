import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//Must install this -
//npm install emailjs-com --save

import emailjs from "emailjs-com";

const ContactUs = () => {
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

    <Form ref={form} onSubmit={sendEmail}>
            <Form.Group as={Row} controlId="nameInput" className="spacing-groups email-form-container">
                <Form.Label column sm="2">
                    Name
                </Form.Label>
                <Col sm="5">
                    <Form.Control
                        type="text"
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="emailInput" className="spacing-groups email-form-container">
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="5">
                    <Form.Control
                        type="text"
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="itemsInput" className="spacing-groups email-form-container">
                <Form.Label column sm="2">
                    Items Wanted
                </Form.Label>
                <Col sm="5">
                    <Form.Control as="textarea"/>
                </Col>
            </Form.Group>

            <Button
                className="new-item-save-button"
                variant="outline-primary" 
                size="lg" 
                type="submit"
                >Send
            </Button>

    </Form>
    // <form className="form-container" ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Items Wanted</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
  );
};

export default ContactUs;