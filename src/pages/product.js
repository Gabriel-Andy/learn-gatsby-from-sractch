import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../components/product.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  console.log(data)
  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          console.log(product)
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title} /> 
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
