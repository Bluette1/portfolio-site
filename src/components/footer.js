


import React from "react"
import { Link } from "gatsby"
import "../styles/footer.css"

const Footer = () => (
<footer className="footer">
  <div className="contact-info">
    <p>Email: your.email@example.com</p>
    <p>Phone: (123) 456-7890</p>
  </div>
  <div className="social-media">
    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Github</a>
    <a href="https://dribbble.com/yourprofile" target="_blank" rel="noopener noreferrer">Medium</a>
    <a href="https://dribbble.com/yourprofile" target="_blank" rel="noopener noreferrer">Blog</a>

  </div>
  <div className="footer-links">
    <Link to="#projects">Projects</Link>
    <Link to="#about">About</Link>
    <Link to="#contact">Contact</Link>
  </div>
  <p>© Your Name {new Date().getFullYear()}. All rights reserved.</p>
</footer>

)

export default Footer