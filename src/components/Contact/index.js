import React, { useState } from "react";
import "../Contact/ContactFormStyles.css";

const ContactForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State to store form validation errors
  const [errors, setErrors] = useState({});

  // Function to validate email format
  const validateEmail = (email) => {
    const re =
      // eslint-disable-next-line
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  // Function to validate the entire form
  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required";
      formIsValid = false;
    }

    // Email validation
    if (!formData.email) {
      errors.email = "Email is required";
      formIsValid = false;
    } else if (!validateEmail(formData.email)) {
      errors.email = "Email is not valid";
      formIsValid = false;
    }

    // Subject validation
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
      formIsValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data:", formData);
      // Add logic to submit form data
    }
  };

  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        {/* Input field for name */}
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        {/* Input field for email */}
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        {/* Input field for subject */}
        <input
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        {errors.subject && <p className="error">{errors.subject}</p>}

        {/* Textarea for message */}
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error">{errors.message}</p>}

        {/* Submit button */}
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
