import React from 'react'
import styled from 'styled-components'

import Abcd from './projects/Abcd'
import Advdiego from './projects/Advdiego'
import Aline from './projects/Aline'
import Buzzfeat from './projects/Buzzfeat'
import Devoradores from './projects/Devoradores'
import DocBrown from './projects/DocBrown'
import Fit from './projects/Fit'
import Lojadaseda from './projects/Lojadaseda'
import Marcelod2 from './projects/Marcelod2'
import Paintings from './projects/Paintings'
import Pedrasul from './projects/Pedrasul'
import Penacova from './projects/Penacova'
import Privilege from './projects/Privilege'
import Qranio from './projects/Qranio'
import Reptil from './projects/Reptil'
import Rioproperty from './projects/Rioproperty'
import Saramandaia from './projects/Saramandaia'
import Sola from './projects/Sola'
import Vamosdesenhar from './projects/Vamosdesenhar'

const NotFound = () =>
  <h1>Case not found...</h1>

const pages = {
  abcd: <Abcd />,
  diegoreis: <Advdiego />,
  aline: <Aline />,
  buzzfeat: <Buzzfeat />,
  devoradores: <Devoradores />,
  docbrown: <DocBrown />,
  fit: <Fit />,
  lojadaseda: <Lojadaseda />,
  marcelod2: <Marcelod2 />,
  paintings: <Paintings />,
  pedrasul: <Pedrasul />,
  penacova: <Penacova />,
  privilege: <Privilege />,
  qranio: <Qranio />,
  reptil: <Reptil />,
  rioproperty: <Rioproperty />,
  saramandaia: <Saramandaia />,
  sola: <Sola />,
  vamosdesenhar: <Vamosdesenhar />,
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
