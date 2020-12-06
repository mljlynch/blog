exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(
        `
        {
          articles: allStrapiArticle {
            edges {
              node {
                strapiId
                slug
              }
            }
          }
        }
      `
    );

    if (result.errors) {
        throw result.errors;
    }

    // Create blog articles pages.
    const articles = result.data.articles.edges;

    const ArticleTemplate = require.resolve("./src/templates/article.js");

    articles.forEach((article, index) => {
        createPage({
            path: `/article/${article.node.slug}`,
            component: ArticleTemplate,
            context: {
                slug: article.node.slug,
            },
        });
    });

    const AboutMe = require.resolve("./src/templates/aboutme.js");

    createPage({
        path: `/about_me`,
        component: AboutMe,
    })

    const ContactMe = require.resolve("./src/templates/contact.js");

    createPage({
        path: `/contact`,
        component: ContactMe,
    })

    const response = await graphql(
        `
        {
          categories: allStrapiCategory{
            edges {
              node {
                strapiId
                name
                slug
              }
            }
          }
        }
      `
    );
    // Create blog articles pages.
    const categories = response.data.categories.edges

    const CategoryTemplate = require.resolve("./src/templates/category.js");

    categories.forEach((category, index) => {
        createPage({
            path: `/category/${category.node.name}`,
            component: CategoryTemplate,
            context: {
                slug: category.node.slug,
            },
        });
    });

};

module.exports.onCreateNode = async({ node, actions, createNodeId }) => {
    const crypto = require(`crypto`);

    if (node.internal.type === "StrapiArticle") {
        const newNode = {
            id: createNodeId(`StrapiArticleContent-${node.id}`),
            parent: node.id,
            children: [],
            internal: {
                content: node.content || " ",
                type: "StrapiArticleContent",
                mediaType: "text/markdown",
                contentDigest: crypto
                    .createHash("md5")
                    .update(node.content || " ")
                    .digest("hex"),
            },
        };
        actions.createNode(newNode);
        actions.createParentChildLink({
            parent: node,
            child: newNode,
        });
    }
};