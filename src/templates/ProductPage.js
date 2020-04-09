/* eslint-disable */
import React from 'react'
import {graphql} from 'gatsby'
import SEO from '../components/SEO'
import get from 'lodash/get'
import ProductSummary from '../components/ProductSummary'
import ProductAttributes from '../components/ProductAttributes'
import Layout from '../components/Layout'

class ProductPageTemplate extends React.PureComponent {
  render() {
    const productInfo = get(this, 'props.data.allMagentoProduct')
    const data = productInfo.edges[0].node
    const slug = data.slug
    const image = get(data, 'image.publicUrl')
    const sizes = get(data, 'image.childImageSharp.sizes')
    const product = {
      ...data,
      id: data.id,
      image,
      image: data.image,
      header: data.name,
      meta: data.meta,
      sku: data.sku,
    }

    if (!sizes) return null

    return (
      <Layout location={this.props.location}>
        <SEO title={slug} />
        <ProductSummary {...product} />
        <ProductAttributes {...product} />
      </Layout>
    )
  }
}

export default ProductPageTemplate

export const pageQuery = graphql`
  query ProductsQuery($id: String!) {
    allMagentoProduct(filter: {id: {eq: $id}}) {
      edges {
        node {
          id
          name
          description
          price {
            regularPrice {
              amount {
                currency
                value
              }
            }
          }
          image {
            publicURL
            childImageSharp {
              sizes(maxWidth: 400) {
                ...GatsbyImageSharpSizes
              }
            }
          }
          sku
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
      }
    }
  }
`
