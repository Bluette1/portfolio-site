import React from "react"
import { Link } from "gatsby"
import "../styles/projects.css"

const ProjectsPage = () => (
  <section className="projects-container">
    <article className="back">
      &larr; <Link to="/">Home</Link>
    </article>
    <div className="projects">
      <h1>My Projects</h1>

      <div className="project">
        <h2>Dish Discovery</h2>
        <img src="/images/screenshot-home-page.png" alt="Dish Discovery App" />
        <section className="description">
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
          href="https://dish-dishcovery-44ihk8a1j-bluette1s-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
        <a
          href="https://github.com/Bluette1/dish-dishcovery-app"
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
          href="https://postbee.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
        <a
          href="https://github.com/Bluette1/postbee"
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
          href="https://brown-lurleen-15.tiiny.site/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
        <a
          href="https://github.com/Bluette1/vibes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </div>

      <div className="project">
        <h2>BotBuddy</h2>
        <img src="/images/screenshot-botbuddy.png" alt="BotBuddy App" />
        <section className="description">
          <p>
            BotBuddy is a versatile automation bot designed to enhance user
            interaction within digital environments, particularly on Discord.
            This project aims to streamline various tasks, provide intelligent
            responses, and foster a welcoming atmosphere in servers through a
            range of engaging features.
          </p>
        </section>

        <article>
          <h3>Key Features:</h3>
          <ul className="botbuddy-features">
            <li>
              <strong>Bot Setup:</strong> Developers can easily set up the bot
              to automate tasks tailored to their specific environments.
            </li>
            <li>
              <strong>Command Integration:</strong> Users can interact with
              BotBuddy using efficient commands, ensuring quick and
              straightforward communication.
            </li>
            <li>
              <strong>Environment Configuration:</strong> The bot loads
              environment variables, allowing it to access essential
              configuration settings seamlessly.
            </li>
            <li>
              <strong>ChatGPT Integration:</strong> By integrating with the
              OpenAI API, BotBuddy delivers intelligent responses, enriching
              user interactions and providing valuable insights.
            </li>
            <li>
              <strong>Conversation History:</strong> The bot maintains context
              by storing conversation history, allowing for more personalized
              exchanges across sessions.
            </li>
            <li>
              <strong>Database Storage:</strong> All conversation history is
              persistently stored in a database, ensuring data is easily
              retrievable and secure.
            </li>
            <li>
              <strong>Welcome Message:</strong> BotBuddy greets new members upon
              joining a server, creating an inviting and friendly atmosphere.
            </li>
            <li>
              <strong>Inspirational Quotes:</strong> Users receive random
              inspirational quotes, offering motivation and positivity
              throughout their day.
            </li>
            <li>
              <strong>Support the Creator:</strong> A "Buy Me a Coffee" feature
              allows users to support the bot's creator through donations,
              fostering a sense of community and appreciation.
            </li>
            <li>
              <strong>New Year Celebration:</strong> On New Year's Day, BotBuddy
              sends celebratory messages to all members, enhancing the festive
              spirit.
            </li>
            <li>
              <strong>Birthday Celebration:</strong> Users receive personalized
              messages on their birthdays, making them feel special and valued.
            </li>
            <li>
              <strong>Task Reminders:</strong> Users can set reminders for
              tasks, helping them manage their time effectively and stay
              organized.
            </li>
            <li>
              <strong>Recurring Reminders:</strong> BotBuddy supports recurring
              reminders for ongoing responsibilities, ensuring users never miss
              important tasks.
            </li>
            <li>
              <strong>Command Usage:</strong> Simple commands like /ping provide
              an intuitive way for users to interact with the bot, making
              communication effortless.
            </li>
          </ul>

          <h3>Technologies Used:</h3>
          <ul>
            <li>
              <strong>Python:</strong> The primary programming language for
              developing BotBuddy, enabling robust and efficient bot
              functionalities.
            </li>
            <li>
              <strong>OpenAI API:</strong> Used for integrating advanced AI
              capabilities, allowing BotBuddy to provide intelligent and
              context-aware responses.
            </li>
            <li>
              <strong>Discord.py:</strong> A powerful library for interacting
              with the Discord API, facilitating seamless bot deployment and
              interaction within Discord servers.
            </li>
          </ul>
        </article>

        <a
          href="https://discord.com/oauth2/authorize?client_id=1296658070159753377"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
        <a
          href="https://github.com/Bluette1/discord_bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </div>
    </div>
    <article className="back">
      &larr; <Link to="/">Home</Link>
    </article>
  </section>
)

export default ProjectsPage
