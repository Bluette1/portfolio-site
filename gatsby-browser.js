/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import "./src/styles/global.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./src/styles/global.css"; // Import your global CSS
import "@fontsource/fira-sans/400.css"; // Adjust based on the font weight you need
import "@fontsource/fira-sans/700.css"; // For bold text, if needed


export const onInitialClientRender = () => {
  const link = document.createElement("link")
  link.href =
    "https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display"
  link.rel = "stylesheet"
  document.head.appendChild(link)
}
