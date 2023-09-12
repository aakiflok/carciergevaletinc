import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your Email.js service ID
        'YOUR_TEMPLATE_ID', // Replace with your Email.js template ID
        e.target,
        'YOUR_USER_ID' // Replace with your Email.js user ID
      );

      console.log('Email sent successfully:', response);

      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <div className="contact-us">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Contact Us</h1>
      </div>

      {/* Informative Section */}
      <div className="info-section">
        <h2>Contact Information</h2>
        <div className="contact-tile">
          <div className="contact-details">
            <h3>Ubaid Patel</h3>
            <p>Email: Carciergevaletinc@gmail.com</p>
            <p>Phone: +647-949-6568</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
        </form>
      </div>

      {/* Styles */}
      <style jsx>
        {`
          .contact-us {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 40px 0;
          }

          .hero-section {
            text-align: center;
            background-image: url('/path/to/retro-background.jpg'); /* Replace with your retro background image */
            background-size: cover;
            background-position: center;
            padding: 100px 0;
          }

          .hero-section h1 {
            font-size: 48px;
            margin-bottom: 20px;
          }

          .info-section {
            max-width: 800px;
            width: 100%;
            padding: 20px;
            text-align: center;
          }

          .info-section h2 {
            font-size: 24px;
            margin-bottom: 20px;
          }

          .contact-tile {
            display: flex;
            align-items: center;
            margin: 20px 0;
          }

          .contact-tile img {
            width: 80px; /* Adjust the image size as needed */
            height: 80px; /* Adjust the image size as needed */
            margin-right: 20px;
          }

          .contact-details h3 {
            font-size: 20px;
            margin-bottom: 10px;
          }

          .contact-details p {
            font-size: 18px;
          }

          .contact-form-section {
            max-width: 400px;
            width: 100%;
          }

          h2 {
            font-size: 28px;
            margin-bottom: 20px;
          }

          form {
            display: flex;
            flex-direction: column;
          }

          label {
            font-size: 18px;
            margin-top: 10px;
          }

          input,
          textarea {
            padding: 10px;
            margin: 5px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
          }

          button {
            background-color: #ff5722; /* Retro orange button color */
            color: #fff;
            border: none;
            border-radius: 4px;
            padding: 12px 20px;
            cursor: pointer;
            font-size: 18px;
            transition: background-color 0.3s ease;
          }

          button:hover {
            background-color: #ff7f40; /* Lighter orange on hover */
          }
        `}
      </style>
    </div>
  );
};

export default ContactUs;