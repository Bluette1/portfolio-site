import React from "react"
import "../styles/projects.css"

const ProjectsPage = () => (
  <div className="projects">
    <h1>My Projects</h1>
    <div className="project">
      <h2>Project Title 1</h2>
      <img src="path/to/image1.jpg" alt="Project 1" />
      <p>
        Description of your project. What technologies you used, what challenges
        you faced, etc.
      </p>
      <a
        href="https://link-to-your-project.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
    <div className="project">
      <h2>Project Title 2</h2>
      <img src="path/to/image2.jpg" alt="Project 2" />
      <p>Description of your project.</p>
      <a
        href="https://link-to-your-project.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
    {/* Add more projects as needed */}
  </div>
)

export default ProjectsPage
