import React, { useState } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/home.css"

const IndexPage = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <img
          src="profile.jpg"
          alt="Your Name"
          className="profile-image"
        />
        <p>Creating beautiful, user-friendly websites.</p>
        <a href="#resume" className="cta">
          Download Resume
        </a>
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage
