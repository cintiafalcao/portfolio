import React, { Component } from 'react'
import styled from 'styled-components'

import { MenuBar } from './Menu'
import Timeline from './Timeline'

const Container = styled.div`
  padding-top: 40px;
`

export default ({ match }) => (
  <Container>
  	<MenuBar url={match.url} />
    <Timeline filter={p => p.category === match.params.id} />
  </Container>
)
