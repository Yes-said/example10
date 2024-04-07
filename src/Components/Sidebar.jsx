import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <aside className="menu notification is-primary">
        <p className="menu-label">Menu</p>
        <ul className="menu-list">
          <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>Dashboard</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>Courses</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>Students</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>View results</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>Raise concern</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>Settings</a></li>
        </ul>
      </aside>

      <style jsx>{`
        .sidebar-container {
          position: fixed;
          top: 50%;
          left: 50px; /* Adjust the left spacing as needed */
          transform: translateY(-50%);
          height: 80vh;
          display: flex;
          align-items: center;
          z-index: 1000; /* Ensure sidebar stays above other content */
        }

        @media (max-width: 768px) {
          .sidebar-container {
            display: none; /* Hide sidebar on smaller screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
