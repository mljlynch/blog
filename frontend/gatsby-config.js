require("dotenv").config({
    path: `.env`,
});


module.exports = {
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        }, {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: "jakes-blog-gatsby",
                protocol: "https",
                hostname: "www.jacoblynch.co",
            },
        },
        {
            resolve: "gatsby-source-strapi",
            options: {
                apiURL: process.env.API_URL,
                contentTypes: ["article", "category", "writer"],
                singleTypes: [`homepage`, `global`],
                queryLimit: 1000,
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "gatsby-starter-default",
                short_name: "starter",
                start_url: "/",
                background_color: "#663399",
                theme_color: "#663399",
                display: "minimal-ui",
                icon: `src/images/gatsby-icon.png`
            },
        },
        "gatsby-plugin-offline",
    ],
};