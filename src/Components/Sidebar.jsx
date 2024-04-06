import React from 'react';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '80vh' }}>
      <div className="column is-one-quarter ml-4"> {/* Added ml-4 for left margin */}
        <aside className="menu notification is-primary" style={{ height: '100%', minWidth: '250px' }}> {/* Changed width to minWidth for responsiveness */}
          <p className="menu-label">Menu</p>
          <ul className="menu-list">
            <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>Dashboard</a></li>
            <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>Students</a></li>
            <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>Results</a></li>
            <li><a href="#" style={{ textDecoration: 'none', color: '#666' }}>Settings</a></li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
