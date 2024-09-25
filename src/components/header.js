import { Link } from "gatsby"
import React, { useState } from "react"
import "../styles/header.css"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="header">
      
      <h1>Marylene Sawyer</h1>
      <h2>Software | Web Developer</h2>
      <nav className="navbar">
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰ {/* Hamburger icon */}
        </div>
        <section className={`navbar-links ${isOpen ? "open" : ""}`}>
          <div className={`nav-links`}>
            <Link to="/projects">Projects</Link>
            <Link to="#about">Bio</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="social-links">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>
            <a
              href="https://dribbble.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </div>
        </section>
      </nav>
    </header>
  )
}

export default Header
