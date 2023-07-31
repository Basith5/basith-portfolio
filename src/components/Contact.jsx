import React from 'react';
import linkedInIcon from '../assets/linkedin.png'; // Replace with your LinkedIn icon path
import githubIcon from '../assets/github-logo.png'; // Replace with your GitHub icon path
import instagramIcon from '../assets/instagram.png'; // Replace with your Instagram icon path
import '../App.css'; // Import the CSS file for animations

const Contact = () => {
  return (
    <div className="relative overflow-x-hidden" id="contact">
      <div className="flex justify-center items-center h-screen bg-black">
        {/* Placeholder for any other content you may want to add */}
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-600 mb-6">Contact Us</h1>
        <p className="text-lg sm:text-xl md:text-2xl text-green-500 font-mono mb-4">
          Feel free to reach out to us!
        </p>
        <form className="w-full md:w-96 mx-auto">
          <div className="mb-4 form-animate-enter form-animate-enter-active">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4 form-animate-enter form-animate-enter-active">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4 form-animate-enter form-animate-enter-active">
            <textarea
              placeholder="Message"
              className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>

        <div className="flex flex-col justify-center items-center mt-4 text-green-500 contact-details">
          <p className="mx-2 animate-enter-active mb-2 md:mb-0">
            Phone: <a href="tel:8489698120" target="_blank" rel="noopener noreferrer">8489698120</a>
          </p>
          <p className="mx-2 animate-enter-active">
            Email: <a href="mailto:ab291669@gmail.com" target="_blank" rel="noopener noreferrer">ab291669@gmail.com</a>
          </p>
        </div>

        <div className="flex justify-center items-center mt-4 social-icons">
          <a
            href="https://www.linkedin.com/in/your-linkedin-url"
            className="mx-2 animate-enter-active"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/Basith5"
            className="mx-2 bg-white animate-enter-active"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className="w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com/your-instagram-username"
            className="mx-2 animate-enter-active"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
