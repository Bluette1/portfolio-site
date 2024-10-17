import { Link } from "gatsby"
import React, { useState } from "react"
import "../styles/header.css"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className="header">
        <h1>Marylene Sawyer</h1>
        <h2>Software Developer</h2>
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
            <div className="social-links desktop">
              <a
                href="https://www.linkedin.com/in/marylene-sawyer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Bluette1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://medium.com/@marylene.sawyer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </a>
              <a
                href="http://blog.marylene.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </div>
          </section>
          {/* Social Links Mobile */}
          <div className="social-links mobile">
            <a
              href="https://www.linkedin.com/in/marylene-sawyer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Bluette1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://medium.com/@marylene.sawyer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>
            <a
              href="http://blog.marylene.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </div>
        </nav>
      </header>
      {/* SVG for Desktop Screens */}
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="shape desktop-svg"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#35424a", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#1a1d20", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          fill="url(#gradient1)"
        ></path>
      </svg>

      {/* Inverted Dome SVG for Mobile Screens */}
      <svg
        className="mobile-svg"
        width="100%"
        height="100px"
        viewBox="0 0 100 25"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#35424a", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#1a1d20", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M0,25 Q50,0 100,25 L100,0 L0,0 Z"
          fill="url(#gradient2)"
          stroke="transparent"
          strokeWidth="2"
        />
      </svg>
      <style jsx>{`
        .mobile-svg {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-svg {
            display: none;
          }
          .mobile-svg {
            display: block;
          }
        }
      `}</style>
    </>
  )
}

export default Header
