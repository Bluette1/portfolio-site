import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import {
  ArrowDownTrayIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid"
import "../styles/home.css"

const IndexPage = () => {
  return (
    <div className="home">
      <Header />
      <main id="about">
        <img
          src="images/profile.jpg"
          alt="Your Name"
          className="profile-image"
        />
        <h2>Software Developer</h2>
        <p>Creating beautiful, user-friendly websites.</p>
        <a
          href="https://professional-cloud.s3.amazonaws.com/Copy_of_Resume.pdf"
          className="cta"
          target="_blank"
        >
          Download Resume{" "}
          <span class="icon">
            <ArrowDownTrayIcon />{" "}
          </span>
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
