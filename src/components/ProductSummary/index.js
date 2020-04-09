import React from 'react'
import Img from 'gatsby-image'

import {Item, Label} from 'semantic-ui-react'

import AddToCart from '../AddToCart'

export default ({id, name, price, sku, image}) => (
  <Item.Group>
    <Item style={{alignItems: 'center'}}>
      <Item.Image size="medium">
        <Img
          style={{width: '250px'}}
          sizes={image.childImageSharp.sizes}
          alt={name}
        />
      </Item.Image>
      <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Description>
          <p>
            {price.regularPrice.amount.currency}{' '}
            {price.regularPrice.amount.value}
          </p>
          <Label>{`SKU: ${sku}`}</Label>
        </Item.Description>
        <Item.Extra>
          <AddToCart productId={id} />
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)
