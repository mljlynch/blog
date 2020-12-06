import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const AuthorTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiUser.username}</h1>
    <ul>
      {data.strapiUser.articles.map(article => (
        <li key={article.id}>
          <h2>
            <Link to={`/Article_${article.id}`}>{article.title}</Link>
          </h2>
          <p>{article.content}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default AuthorTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiWriter(id: { eq: $id }) {
      id
      name
      articles {
        id
        title
        content
      }
    }
  }
`
