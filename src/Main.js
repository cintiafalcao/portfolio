import React, { Component } from 'react'
import styled, { keyframes} from 'styled-components'

import ProfilePhoto from './images/home_photo.jpg'
import arrow from './images/arrow.png'

const Image = styled.img`
  align-self: center;
  max-width: 100%;
`

const Main = styled.section`
  display: flex;
  flex-direction: row;
  height: 100vh;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f6f5fa;
`
const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0 15%;
`

const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  font-size: 3.2em;
  color: #f29221;
  /*text-transform: uppercase;*/
`

const Subtitle = styled.h2`
  font-size: 2em;
  margin-top: -1.3em;
  color: #251c45;
`

const Bio = styled.p`
  margin-top: 2em;
  font-size: 1em;

  b {
  font-size: 2.2em;
  color: #251c45;

  }
`

const Right = styled.div`
  flex: 1;
  background: url(${ProfilePhoto});
`

const bounce = keyframes`
  from {
    margin-top: -2em;
  }

  to {
    margin-top: -1.5em;
  }
`

const Arrow = styled.div`
  font-size: 3em;
  position: absolute;
  width: 100%;
  text-align: center;
  top: 100%;
  margin-top: -1.5em;
  color: orange;
  animation: ${bounce} 1.2s ease-in-out  infinite alternate;
`

export default class extends Component {
  render() {
    return (
      <Main>
        <Left>
          <Wrapper>
            <Title>Cíntia Falcão</Title>
            <Bio><b>I’m a UI/UX designer & visual designer</b> from Brazil living in Amsterdam, with 13 years of experience.</Bio>

<Bio>I’ve been always learning to improve my knowledge, face new challenges and do my best. I’m also passionate about art and animation.</Bio>
          </Wrapper>
        </Left>
        <Right/>
        <Arrow><Image src={arrow} alt='arrow' /></Arrow>
      </Main>
    );
  }
}
