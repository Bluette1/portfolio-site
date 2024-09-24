import React from "react"
import Header from "../components/header"
import "../styles/home.css"

const IndexPage = () => (
  <div className="home">
    <Header />
    <main>
      <img
        src="/images/profile.jpg"
        alt="Marylene Sawyer"
        className="profile-image"
      />
      <p>Creating beautiful, user-friendly websites.</p>
      <a href="/projects" className="cta">
        Download Resume
      </a>
    </main>
  </div>
)

export default IndexPage
