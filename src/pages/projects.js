import React from "react"
import "../styles/projects.css"

const ProjectsPage = () => (
  <section className="projects-container">
    <div className="projects">
      <h1>My Projects</h1>

      <div className="project">
        <h2>Dish Discovery App</h2>
        <img src="/images/screenshot-home-page.png" alt="Dish Discovery App" />
        <section className="description">
          {" "}
          <p>
            The Dish Discovery App is a web application designed to help users
            discover and explore a wide variety of recipes based on their
            preferences and dietary restrictions. Leveraging a user-friendly
            interface, this app allows users to input specific ingredients they
            have on hand, filter recipes by cuisine type, and save their
            favorite dishes for future reference.
          </p>
        </section>

        <article>
          <h3>Key Features:</h3>
          <ul>
            <li>
              <strong>Recipe Search:</strong> Users can search for recipes using
              specific ingredients, making meal planning easier and reducing
              food waste.
            </li>
            <li>
              <strong>Dietary Filters:</strong> The app includes options to
              filter recipes by dietary restrictions, such as vegetarian, vegan,
              gluten-free, and more.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> A clean and intuitive
              layout ensures a seamless user experience, allowing users to
              navigate the app effortlessly.
            </li>
            <li>
              <strong>Favorites System:</strong> Users can save their favorite
              recipes for quick access later, enhancing their cooking
              experience.
            </li>
          </ul>

          <h3>Technologies Used:</h3>
          <ul>
            <li>
              <strong>Frontend:</strong> HTML, CSS, TypeScript, React,
              TailwindCSS
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express
            </li>
            <li>
              <strong>Database:</strong> MongoDB
            </li>
            <li>
              <strong>APIs:</strong> Utilizes third-party recipe APIs for
              comprehensive recipe data.
            </li>
          </ul>
        </article>

        <a
          href="https://link-to-your-project.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
        <a
          href="https://link-to-your-project.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </div>

      <div className="project">
        <h2>PostBee App</h2>
        <img src="/images/screenshot-postbee.png" alt="PostBee App" />
        <section className="description">
          {" "}
          <p>
            PostBee is a dynamic job posting platform designed to streamline the
            process of job management for both employers and job seekers. The
            application enables users to seamlessly create, manage, and apply
            for job postings while ensuring a user-friendly experience.
          </p>
        </section>

        <article>
          <h3>Key Features:</h3>
          <ul>
            <li>
              <strong>User Authentication:</strong> Secure sign-up, login, and
              logout functionalities to protect user accounts.
            </li>
            <li>
              <strong>Job Posting:</strong> Employers can easily create and
              manage job listings with essential details.
            </li>
            <li>
              <strong>Responsive Design:</strong> Built with TailwindCSS,
              PostBee offers a modern, responsive interface that adapts to
              various devices.
            </li>
            <li>
              <strong>Intuitive UI:</strong> A clean and user-friendly layout
              that simplifies navigation and enhances user engagement.
            </li>
          </ul>

          <h3>Technologies Used:</h3>
          <ul>
            <li>
              <strong>Frontend:</strong> AngularJS, TypeScript,TailwindCSS
            </li>
            <li>
              <strong>Backend:</strong> Ruby, Ruby on Rails, Python, Flask
            </li>
            <li>
              <strong>Database:</strong> MongoDB
            </li>
            <li>
              <strong>Microservices:</strong> Docker, Pika, RabbitMQ, Bunny,
              SideKiq, Celery
            </li>
          </ul>
        </article>

        <a
          href="https://link-to-your-project.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
        <a
          href="https://link-to-your-project.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </div>
    </div>
  </section>
)

export default ProjectsPage
