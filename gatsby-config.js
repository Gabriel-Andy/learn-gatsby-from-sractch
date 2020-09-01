/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata:{
    title:"Gatsby Tutorial",
    description:"some random description",
    author:"@johndoe",
    data:["item1","item2"],
    person:{name:"peter", age:32},
  },
  /* Your site config here */
  plugins: [`gatsby-plugin-styled-components`],
}
