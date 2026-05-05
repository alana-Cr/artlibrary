/*
* The contact page allows users to send a message to my inbox using EmailJS. I receive the message, their name, and their email. 
*
*/ 

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Form, Button } from "react-bootstrap";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const PUBLIC_KEY = "gLOBgQUxKufsIJGPU";
  const SERVICE_ID = "service_eww0lvp";
  const TEMPLATE_ID = "template_v8f5vum";

  useEffect(() => {
    emailjs.init({ publicKey: PUBLIC_KEY });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current
      )
      .then(() => {
        setStatus("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("Failed to send message. Try again later.");
      });
  };

  return (
    <div className="d-flex flex-column align-items-center mt-4" style={{color: "white"}}>
      <div className="d-flex flex-column w-50">
      <h1 className="mb-4">Contact</h1>
      <h2 className="mb-4" style={{ fontSize: "1.5rem"}}>Let me know what's on your mind. Professional inquiries, feedback, artist recommendations, that weird dream you had last night, whatever you wanna talk about. Just let it out.</h2>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email-input">Your Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="email-input"
            required
            aria-required="true"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="name-input">Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            id="name-input"
            required
            aria-required="true"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="message-input">Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="message"
            id="message-input"
            required
            aria-required="true"
          />
        </Form.Group>

        <Button type="submit" variant="primary">Send Message</Button>
      </Form>
      </div>

      {status && (
        <p className="mt-3" aria-live="polite">
          {status}
        </p>
      )}
    </div>
  );
}
