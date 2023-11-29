import React from "react";
import { useRef } from "react";
// useRef -- react hook
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_i53o4c6",
        "template_terzd5t",
        form.current,
        "i3Gta73RG87GhWCzN"
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

  return (
    <section>
      <div className="container">
        <h2 className="--text-center">Contact Us</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="--form-control --card --flex-center --dir-column"
        >
          <input
            type="text"
            placeholder="Enter Full Name..."
            name="user_name"
            required
          />
          <input
            type="email"
            placeholder="Enter EMail..."
            name="user_email"
            required
          />
          <input
            type="text"
            placeholder="Enter Subject..."
            name="subject"
            required
          />
          <textarea name="message" cols={30} rows={10}></textarea>
          <button type="submit" className="--btn --btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
