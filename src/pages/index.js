import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import get from 'lodash/get'
import {Image, Header} from 'semantic-ui-react'
import ProductList from '../components/ProductList'
import SEO from '../components/SEO'
import logo from '../images/inviqa.svg'
import Layout from '../components/Layout'

const StoreIndex = ({location}) => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMagentoProduct(
        filter: {
          categories: {
            elemMatch: {
              name: {
                in: [
                  "Sale"
                  "Bags"
                  "Tees"
                  "Gear"
                  "Women"
                  "Men"
                  "Training"
                  "Hoodies & Sweatshirts"
                ]
              }
            }
          }
        }
        sort: {fields: name}
      ) {
        edges {
          node {
            id
            name
            description
            image {
              publicURL
            }
            price {
              regularPrice {
                amount {
                  currency
                  value
                }
              }
            }
            image {
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  `)

  const siteTitle = get(data, 'site.siteMetadata.title')
  const products = get(data, 'allMagentoProduct.edges')

  return (
    <Layout location={location}>
      <SEO title={siteTitle} />
      <Header
        as="h3"
        icon
        textAlign="center"
        style={{
          marginBottom: '2em',
        }}
      >
        <Header.Content
          style={{
            width: '60%',
            margin: '0 auto',
          }}
        ></Header.Content>
      </Header>
      <ProductList products={products} />
    </Layout>
  )
}

export default StoreIndex
