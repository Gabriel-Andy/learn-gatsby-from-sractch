import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const example = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <Layout>
      <h1>hello from example page</h1>
      <Header />
      <HeaderStatic />
      <h5>author:{author}</h5>
    </Layout>
  )
}
export const data = graphql`
  query MyQuery {
    site(siteMetadata: {}) {
      info: siteMetadata {
        data
        author
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`

export default example
