import React from "react"
import "../styles/projects.css"

const ProjectsPage = () => (
  <section className="projects-container">
    <div className="projects">
      <h1>My Projects</h1>

      <div className="project">
        <h2>Dish Discovery</h2>
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
        <h2>PostBee</h2>
        <img src="/images/screenshot-postbee.png" alt="PostBee App" />
        <section className="description">
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

      <div className="project">
        <h2>Vibes</h2>
        <img src="/images/screenshot-vibes-home-page.png" alt="Vibes App" />
        <section className="description">
          {" "}
          <p>
            Vibes is a beautifully designed meditation app that helps users
            achieve mindfulness through a combination of soothing nature
            imagery, calming music, and guided meditation sessions. 
          </p>
        </section>

        <article>
          <h3>Key Features:</h3>
          <ul className="vibes-features">
            <li>
              <strong>Nature-Inspired Visuals:</strong> Immerse yourself in a
              peaceful atmosphere with rotating high-quality nature images,
              including calming oceans, serene forests, and majestic mountains.
             
            </li>
            <li>
              <strong>Soothing Background Music:</strong> Meditate to the sounds
              of tranquility with a selection of calming audio tracks. You can
              choose your preferred music and adjust the volume to create the
              perfect balance between silence and sound.
            </li>
            <li>
              <strong>Guided Meditation Sessions:</strong> Follow along with
              audio-guided meditation sessions designed to help you focus,
              relax, and de-stress. Choose from a variety of topics, such as
              mindfulness, stress relief, and relaxation.
            </li>
            <li>
              <strong>Personalized Experience:</strong> Tailor your meditation
              sessions by adjusting image transition intervals, selecting your
              favorite music, and saving your preferences for future sessions.
              Vibes remembers your choices, ensuring a seamless and personalized
              experience every time.
            </li>
            <li>
              <strong>Offline Mode:</strong> Don’t let a poor internet
              connection interrupt your mindfulness. Download your favorite
              images and music tracks to meditate offline, wherever and whenever
              you need to find peace.
            </li>
            <li>
              <strong>Meditation Reminders:</strong> Stay consistent with your
              practice by setting daily or weekly meditation reminders. Vibes
              will gently nudge you to meditate, helping you build a regular
              routine.
            </li>
            Track your progress with a detailed meditation history that logs
            your previous sessions, duration, and settings. Stay motivated by
            reviewing your journey toward mindfulness over time.
          </ul>

          <h3>Technologies Used:</h3>
          <ul>
            <li>
              <strong>Frontend:</strong> React Native
            </li>
            <li>
              <strong>Backend:</strong> Ruby on Rails
            </li>
            <li>
              <strong>Database:</strong> PostgreSQL
            </li>
            <li>
              <strong>Caching:</strong> Redis for API response caching
            </li>
            <li>
              <strong>Third-Party Integrations:</strong> Getty Images API for
              high-quality nature images
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
