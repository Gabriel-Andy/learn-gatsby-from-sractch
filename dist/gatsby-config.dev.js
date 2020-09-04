"use strict";

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: "Gatsby Tutorial",
    description: "some random description",
    author: "@johndoe",
    data: ["item1", "item2"],
    person: {
      name: "peter",
      age: 32
    }
  },

  /* Your site config here */
  plugins: ["gatsby-transformer-sharp", "gatsby-plugin-sharp", "gatsby-plugin-styled-components", {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "".concat(__dirname, "/src/images/")
    }
  }, {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "posts",
      path: "".concat(__dirname, "/src/posts/")
    }
  }]
};