import React, { useState } from 'react';
import logo from '../assets/Logo.png';
import HomeBackground from '../assets/Homebackground.jpg';

const Navbar = () => {
  const [showHomeContent, setShowHomeContent] = useState(false);
  const [showAboutContent, setShowAboutContent] = useState(false);

  const handleHomeClick = () => {
    setShowHomeContent(true);
    setShowAboutContent(false);
  };

  const handleAboutClick = () => {
    setShowAboutContent(true);
    setShowHomeContent(false);
  };

  return (
    <div>
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src={logo} alt="Logo" style={{ width: '40px', height: '200px' }} />
            </a>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
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
                    <a className="navbar-item">
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
          <h2 className="title is-4">Our Mission</h2>
          <p>
          Our mission is to provide a robust and user-friendly platform that 
          empowers students, teachers, and parents with transparent and real-time
           access to academic progress and performance indicators.
          </p>
          </div>
        </div>
      )}

      <style jsx>{`
        .home-content,
        .about-content {
          background-color: rgba(255, 255, 255, 0.9);
          padding: 20px;
          max-width: 80%;
          text-align: center;
          border-radius: 5px;
          overflow-y: auto;
          margin: 50px auto; /* Center the content */
        }

        .home-image {
          width: 100%; /* Make the image fill the container */
          height: auto;
          margin-bottom: 20px; /* Add spacing below the image */
        }

        .about-content {
          text-align: left;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
