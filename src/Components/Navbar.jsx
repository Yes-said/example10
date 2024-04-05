import React, { useState } from 'react'
import logo from '../assets/Logo.png';
import HomeBackground from '../assets/Homebackground.jpg';

const Navbar = () => {
  const [showHomeBackground, setShowHomeBackground] = useState(false);

  const handleHomeClick = () => {
    setShowHomeBackground(true);
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
                  <a className="navbar-item">
                    About
                  </a>
                  <a className="navbar-item is-selected">
                    View results
                  </a>
                  <a className="navbar-item">
                    Contact
                  </a>
                  <hr className="navbar-divider"></hr>
                  <a className="navbar-item">
                    Raise concern
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

    {showHomeBackground && (
      <div className="home-background">
        <img
          src={HomeBackground}
          alt="Home Background"
          className="home-image"
        />
        <div className="home-content">
          <div className="container" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
            <h2 className="title is-4">Welcome to the Kenya Institute Of Mass Communication Student Result Management System</h2>
            <p>We're thrilled to have you here. Whether you're a student, teacher, or administrator, this platform is designed to make managing academic progress smooth and efficient.</p>
            <p>Stay updated on your latest grades, exam schedules, and important announcements. Your success is our priority, and this system is here to support you every step of the way.</p>
            <p>Let's embark on this journey together towards excellence. Happy learning!</p>
          </div>
        </div>
      </div>
    )}

    <style jsx>{`
      .home-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .home-image {
        width: 50%;
        height: 50%;
        object-fit: cover;
      }

      .home-content {
        background-color: rgba(255, 255, 255, 0.9);
        padding: 20px;
        max-width: 80%;
        text-align: center;
        border-radius: 5px;
        overflow-y: auto;
        margin-top: 50px; /* Adjust this value as needed */
      }
    `}</style>
  </div>
  )
}

export default Navbar