require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Inviqa Magento2 Store',
    author: 'Anil Maharjan',
    description: 'Magento2 store frontend build on Gatsby.',
    siteUrl: 'http://inviqa.com',
  },
  pathPrefix: '/gatsby-starter-ecommerce',
  plugins: [
    {
      resolve: 'gatsby-source-magento2',
      options: {
        graphqlEndpoint: 'https://magento2-sample.my127.site/graphql',
        // graphqlEndpoint: 'https://magento2-sample.my127.site',
        allProductsQuery: `query {
          products (
            search: "", pageSize: 10000
          ) {
            items {
              id
              sku
              name
              type_id

              description {
                html
              }
              
              short_description {
                html
              }
              
              meta_title
              meta_keyword
              meta_description
              
              image {
                label
                url
              }

              url_key
              
              new_to_date
              new_from_date
              special_price
              
              updated_at

              ... on ConfigurableProduct {
                configurable_options {
                  attribute_id          
                  attribute_code          
                  label
                  values {
                    label
                    value_index
                  }
                }
              }
              
              categories {
                id
                name
                url_path
              }

              price {
                regularPrice {
                  amount {
                    value
                    currency
                  }
                }
              }
            }
          }
        }`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Inviqa M2 Shop',
        short_name: 'Inviqa Shop',
        start_url: '/gatsby-starter-ecommerce/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icons: [
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
