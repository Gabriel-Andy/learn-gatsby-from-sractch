import React from "react"
import Layout from "../components/Layout"
import styles from "../components/product.module.css"

export default function product() {
  return (
    <Layout>
      <div className = {styles.page}>
        <h1>this is my product component</h1>
        <p className="text">
          what is the best way to learn how to code and gain your first job as
          programmer without having a cs degree
        </p>
      </div>
    </Layout>
  )
}
