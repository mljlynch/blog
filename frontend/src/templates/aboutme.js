import React from "react"
import { graphql } from "gatsby"
import ArticlesComponent from "../components/articles"
import Layout from "../components/layout"

// export const query = graphql`
//   query Category($slug: String!) {
//     articles: allStrapiArticle(
//       filter: { status: { eq: "published" }, category: { slug: { eq: $slug } } }
//     ) {
//       edges {
//         node {
//           slug
//           title
//           category {
//             name
//           }
//           image {
//             childImageSharp {
//               fixed(width: 660) {
//                 src
//               }
//             }
//           }
//           author {
//             name
//             picture {
//               childImageSharp {
//                 fixed(width: 30, height: 30) {
//                   ...GatsbyImageSharpFixed
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     category: strapiCategory(slug: { eq: $slug }) {
//       name
//     }
//   }
// `;

const AboutMe = () => {
  const seo = {
    metaTitle: "about me",
    metaDescription: `Jake's about me page`,
  }

  return (
    <Layout seo={seo}>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>About Me</h1>
          {/* TODO: @mljlynch to write up a description of ME - myself */}
          <p>Hi! I'm Jake.</p>
          {/* TODO: Add photo */}
        </div>
      </div>
    </Layout>
  )
}

export default AboutMe
