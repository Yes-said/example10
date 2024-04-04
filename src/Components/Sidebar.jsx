import React from 'react'

const Sidebar = () => {
  return (
    <div className="columns" style={{ height: '80vh', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
      {/* Adjusted height */}
      <div className="column is-one-quarter mt-4">
        <aside className="menu notification is-primary" style={{ height: '100%', width: '250px' }}> {/* Adjusted width */}
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
  )
}

export default Sidebar