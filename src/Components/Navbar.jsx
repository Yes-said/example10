import React, { useState } from 'react';
import logo from '../assets/Logo.png';
import HomeBackground from '../assets/Homebackground.jpg';
import GraduatesImage from '../assets/Graduates.png';
import Sidebar from './Sidebar'; // Import Sidebar component

const Navbar = () => {
  const [showHomeContent, setShowHomeContent] = useState(false);
  const [showAboutContent, setShowAboutContent] = useState(false);
  const [showContactContent, setShowContactContent] = useState(false);

  const handleHomeClick = () => {
    setShowHomeContent(true);
    setShowAboutContent(false);
    setShowContactContent(false);
  };

  const handleAboutClick = () => {
    setShowAboutContent(true);
    setShowHomeContent(false);
    setShowContactContent(false);
  };

  const handleContactClick = () => {
    setShowContactContent(true);
    setShowHomeContent(false);
    setShowAboutContent(false);
  };

  return (
    <div>
      <style jsx global>{`
        body {
          background-color: #f5f5f5; /* Set the background color to grey */
        }
      `}</style>

      <Sidebar /> {/* Render the Sidebar component */}

      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src={logo} alt="Logo" style={{ width: '40px', height: '200px' }} />
            </a>
            {/* Add a button to toggle sidebar visibility on smaller screens */}
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" onClick={handleHomeClick}>
                Home
              </a>
              <a className="navbar-item">
                Documentation
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  More
                </a>
                <div className="navbar-dropdown is-boxed custom-dropdown">
                  <div className="container has-background-grey-light">
                    <a className="navbar-item" onClick={handleAboutClick}>
                      About
                    </a>
                    <a className="navbar-item" onClick={handleContactClick}>
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Content area where Home, About, and Contact content will be displayed */}
      <div className="main-content">
        {showHomeContent && (
          <div className="home-content">
            <img
              src={HomeBackground}
              alt="Home Background"
              className="home-image"
            />
            <div className="container" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
              <h2 className="title is-4">Welcome to the Kenya Institute Of Mass Communication Student Result Management System</h2>
              <p>We're thrilled to have you here. Whether you're a student, teacher, or administrator, 
                this platform is designed to make managing academic progress smooth and efficient.</p>
              <p>Stay updated on your latest grades, exam schedules, and important announcements.
                Your success is our priority, and this system is here to support you every step of the way.</p>
              <p>Let's embark on this journey together towards excellence. Happy learning!</p>
            </div>
          </div>
        )}

        {showAboutContent && (
          <div className="about-content">
            <div className="container">
              <h2 className="title is-4">About Our Student Result Management System</h2>
              <p>Welcome to the Kenya Institute Of Mass Communication Student Result 
                Management System! This platform has been designed to streamline and 
                enhance the management of academic data for our students, teachers, and administrators.</p>
            </div>
            <div>
              <img src={GraduatesImage} alt="Graduates" className="graduates-image" />
              <h2 className="title is-4">Our Mission</h2>
              <p>
                Our mission is to provide a robust and user-friendly platform that 
                empowers students, teachers, and parents with transparent and real-time
                access to academic progress and performance indicators.
              </p>
            </div>
            <div>
              <h2 className="title is-4">About KIMC</h2>
              <p>
                The Kenya Institute of Mass Communication (KIMC) is a public
                media training institution under the Ministry of Information,
                Communications and Digital Economy. It was established in 1961
                with a core mandate in media and communication training a
                middle level for both public and private sector. It has 
                strong emphasis on practical hands-on training aimed at
                meeting the great demand in the ever-changing technology
                industry.
              </p>
            </div>
          </div>
        )}

        {showContactContent && (
          <div className="contact-content">
            <div className="container">
              <h2 className="title is-4">Contact Information</h2>
              <p><strong>School Name:</strong> KENYA INSTITUTE OF MASS COMMUNICATION</p>
              <p><strong>Address:</strong> Uholo road, Nairobi South B, Off Mombasa Road,</p>
              <p> P.O BOX 42422-00100, Nairobi Kenya</p>
              <p><strong>Phone:</strong> +254708 262 895</p>
              <p><strong>Email:</strong> Info@kimc.ac.ke</p>
              <p><strong>Website:</strong> www.kimc.ac.ke</p>
              <p><strong>Technical Support:</strong> support@abchighschool.edu</p>
              <p><strong>Office Hours:</strong> Monday to Friday, 8:00 AM - 4:00 PM</p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .main-content {
          margin-left: 300px; /* Adjust left margin to accommodate the sidebar width */
          padding: 20px;
        }

        @media (max-width: 768px) {
          .main-content {
            margin-left: 0; /* Reset margin for smaller screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
