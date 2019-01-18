import React from 'react'
import { NavLink, Link } from 'react-router-dom'

// get the last route segment from the current URL
const getCurrentURL = () => window.location.href.slice(window.location.href.lastIndexOf('/')+1);
// return active or not based on matching path
const setActiveNav = (url, path) => (url === path.slice(path.lastIndexOf('/')+1)) ? 'active' : '';
// render navLinks
const renderNavLinks = (links) => links.map(link => (
  <li key={link.text} className={setActiveNav(getCurrentURL(), link.path)}>
    <NavLink to={link.path}>{link.text}</NavLink>
  </li>
));

export default function Navbar({ links }) {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={links[0].path} className="brand-logo">App Logo</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderNavLinks(links)}
        </ul>
      </div>
    </nav>
  )
}