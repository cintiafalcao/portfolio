import React, { Component } from 'react'
import styled from 'styled-components'

import Project from './Project'
import projects from './projects/list.json'

const Timeline = styled.section``

export default class extends Component {
  render() {
    return (
      <Timeline>
        {projects.map(Project)}
      </Timeline>
    );
  }
}
