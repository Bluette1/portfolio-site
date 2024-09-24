import React, { useState } from "react"
import "../styles/home.css"

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="home">
      <header className="header">
        <h1>Marylene Sawyer</h1>
        <h2>Software | Web Developer</h2>
        <nav className="navbar">
          <div className="menu-toggle" onClick={toggleMenu}>
            ☰ {/* Hamburger icon */}
          </div>
          <div className={`nav-links ${isOpen ? "open" : ""}`}>
            <a href="/projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>
      <main>
        <img
          src="/images/profile.jpg"
          alt="Your Name"
          className="profile-image"
        />
        <p>Creating beautiful, user-friendly websites.</p>
        <a href="#projects" className="cta">
          Download Resume
        </a>
      </main>
    </div>
  )
}

export default IndexPage
