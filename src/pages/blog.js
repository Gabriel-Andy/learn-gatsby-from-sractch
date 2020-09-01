import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

export default function blog() {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is the blog component</h1>

        <p className={styles.text}>
          what is the best way to learn how to code and gain your first job as
          programmer
        </p>
      </div>
    </Layout>
  )
}
