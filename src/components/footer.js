import React from "react"
import { Link } from "gatsby"
import "../styles/footer.css"

const Footer = () => (
  <footer className="footer">
    <section className="footer-section-links">
      <div className="footer-links">
        <Link to="/projects">Projects</Link>
        <Link to="#about">Bio</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/marylene-sawyer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Bluette1 "
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
          href="http://blog.marylene.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </div>
    </section>

    <p className="v1">
      &rarr;{" "}
      <a
        href="http://v1.marylene.tech/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View First Version of my Portfolio
      </a>
    </p>

    <p>© Marylene Sawyer {new Date().getFullYear()}. All rights reserved.</p>
  </footer>
)

export default Footer
