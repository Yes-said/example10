import React, { useState } from 'react'
import logo from '../assets/Logo.png';
import HomeBackground from '../assets/Homebackground.jpg';

const Navbar = () => {
  const [showHomeBackground, setShowHomeBackground] = useState(false);

  const handleHomeClick = () => {
    setShowHomeBackground(true);
  };

  return (
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

      {showHomeBackground && (
        <div style={{ position: 'fixed', top: '120px', right: 0, width: 'calc(100% - 300px)', height: 'calc(100% - 180px)', zIndex: -1 }}>
          <img
            src={HomeBackground}
            alt="Home Background"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
          />
        </div>
      )}
    </nav>
  )
}

export default Navbar