import React from "react"
import { Link } from "gatsby"
import "../styles/header.css"

const Header = () => (
  <header className="header">
      <h1>Marylene Sawyer</h1>
      <h2>Software | Web Developer</h2>
      <nav>
        <a href="/projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
)

export default Header
