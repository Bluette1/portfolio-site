import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/contactForm.css"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const response = await fetch("YOUR_FORMSPREE_ENDPOINT", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      setSubmitted(true)
    }
  }

  return (
    <section className="contact">
      {" "}
      <article className="back">
        &larr; <Link to="/">Home</Link>
      </article>
      <div className="contact-form">
        {submitted ? (
          <p>Thank you for your message!</p>
        ) : (
          <>
            <>
              <h4 className="contact">Get in touch 👋</h4>
            </>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                />
              </label>
              <article className="send-message">
                <button type="submit">Send Message</button>
              </article>
            </form>
          </>
        )}
      </div>
    </section>
  )
}

export default ContactPage
