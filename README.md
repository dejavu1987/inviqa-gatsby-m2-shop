# Gatsby Inviqa M2 Shop

We are using `gatsby-starter-ecommerce` a Gatsby starter for creating an
eCommerce site. For more details and demo of the starter go to:
<https://parmsang.github.io/gatsby-starter-ecommerce/>

We are using `gatsby-source-magento2` to get data from Magento2. For more
details go to:

https://www.gatsbyjs.org/packages/gatsby-source-magento2/

## Getting started

Install

`npm install`

Run development env

`gatsby develop`

Build for prod

`gatsby build`

## Features

- M2 graphQl API integration
- Semantic-UI

## Troubleshooting

In case you get an error like follows during build

```
error executing GraphQL query: { Error: Cannot query field "gatsbyCmsBlocks" on type "Query".: {"response":{"errors":[{"message":"Cannot query field \"gatsbyCmsBlocks\" on type \"Query\".","category":"graphql","locations":[{"line":2,"column":5}]}],"status":200},"request":{"query":"query($ids: [String]) {\n    gatsbyCmsBlocks(identifiers: $ids)\n    {\n        items\n        {\n            identifier\n            title\n            content\n        }\n    }\n}","variables":{"ids":["home-page-block","footer_links_block"]}}}
```

Comment out line number 36 in
`node_modules/gatsby-source-magento2/nodes/index.js`

```js
// yield (0, _cmsBlocks.default)(params, Obje...
```

The feature is apparantly in progress, tried to patch the source in a fork here
(https://github.com/dejavu1987/gatsby-source-magento2) but could not figure out
the correct version/branch. In the future we may want to contribute if
necessary.
