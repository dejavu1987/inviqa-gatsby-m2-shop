/* eslint-disable camelcase */
import React from 'react'
import {Header, Divider, Table} from 'semantic-ui-react'

export default props => {
  const {description, material, configurable_options} = props
  console.log({props})

  return (
    <div>
      <Header as="h3">About this product</Header>
      <p dangerouslySetInnerHTML={{__html: description}}></p>

      <Divider />

      <Table celled>
        <Table.Header style={{background: '#f9fafb'}}>
          <Table.Row>
            <Table.HeaderCell colSpan="2">Attributes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {configurable_options.map(opt => (
            <Table.Row>
              <Table.Cell>{opt.label}</Table.Cell>
              <Table.Cell>
                {opt.values.map(value => (
                  <p>{value.label}</p>
                ))}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
