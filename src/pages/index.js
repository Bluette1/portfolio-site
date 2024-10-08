import React from 'react';
import Footer from "../components/footer"
import Header from "../components/header"
import { ArrowDownTrayIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import "../styles/home.css"

const IndexPage = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <img
          src="images/profile.jpg"
          alt="Your Name"
          className="profile-image"
        />
        <p>Creating beautiful, user-friendly websites.</p>
        <a href="#resume" className="cta">
          Download Resume <span class="icon"><ArrowDownTrayIcon/> </span>
        </a>
        <div className="contact-info">
      <p>
        <span className="icon">
          <EnvelopeIcon />
        </span>
        marylene.sawyer@gmail.com
      </p>
      <p>
        <span className="icon">
          <PhoneIcon />
        </span>
        (+27) 061-472-7895
      </p>
    </div>
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage
