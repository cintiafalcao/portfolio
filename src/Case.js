import React from 'react'
import styled from 'styled-components'

import Qranio from './projects/Qranio'

const NotFound = () =>
  <h1>Case not found...</h1>

const pages = {
  qranio: <Qranio />,
}

export const Title = styled.h1`
  color: orange;
  margin-top: 3em;
  margin-bottom: 2em;
`

export const Text = styled.p`
  text-align: left;
  font-size: 1.2em;
  margin: 1em 40px;
`

const ProjectDiv = styled.div`
  text-align: center;
  margin-left: 80px;
  margin-right: 40px;
`

const ScrollBar = styled.div`
  position: fixed;
  left: 40px;
  top: 40px;
  bottom: 40px;
  width: 1px;
  background: black;
`

const ScrollIndicator = styled.div`
  position: fixed;
  top: 40px;
  left: 30px;
  width: 10px;
  height: 0px;
  background: orange;
`

export class Project extends React.Component {
  componentDidMount() {
    document.onscroll = () => this.onScroll();
    document.onresize = () => this.onScroll();
    document.body.onload = () => this.onScroll();
  }

  componentWillUnmount() {
    document.onscroll = undefined;
    document.onresize = undefined;
    document.body.onload = undefined;
  }

  onScroll() {
    const height = this.scrollBar.clientHeight / this.project.clientHeight * this.scrollBar.clientHeight;
    this.scrollIndicator.style.height = `${height}px`;
    const top = document.body.scrollTop / (document.body.scrollHeight - window.innerHeight) * (this.scrollBar.clientHeight - height);
    this.scrollIndicator.style.top = `${ 40 + top }px`;
  }

  render() {
    return (
      <ProjectDiv innerRef={ p => this.project = p }>
        <ScrollBar innerRef={ sb => this.scrollBar = sb }>
          <ScrollIndicator innerRef={ si => this.scrollIndicator = si }/>
        </ScrollBar>
        { this.props.children }
      </ProjectDiv>
    );
  }
}

export const Image = styled.img`
  width: 100%;
`

export default ({ match }) => {
  try {
    return pages[match.params.id]
  } catch (e) {
    return <NotFound />
  }
}
