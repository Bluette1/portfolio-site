/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import "./src/styles/global.css"

// Optionally, you can use a <link> directly in your HTML
export const onInitialClientRender = () => {
  const link = document.createElement('link');
  link.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Lora:wght@400;700&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}


