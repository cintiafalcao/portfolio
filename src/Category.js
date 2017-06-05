import React, { Component } from 'react'

import Timeline from './Timeline'

export default ({ match }) => (
  <Timeline filter={p => p.category === match.params.id} />
)
