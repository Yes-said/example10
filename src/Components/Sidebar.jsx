import React from 'react'

const Sidebar = () => {
  return (
    <div className="columns">
      <div className="column is-one-quarter mt-6"> 
        <aside className="menu notification is-primary">
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