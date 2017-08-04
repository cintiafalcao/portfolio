import React, { Component } from 'react'
import styled, { keyframes} from 'styled-components'

import ProfilePhoto from './images/home_photo.jpg'
import arrow from './images/arrow.png'
import logo from './images/logo.png'

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
  font-size: 3em;
  color: #251c45;
  /*text-transform: uppercase;*/
`

const Subtitle = styled.h2`
  font-size: 2em;
  margin-top: -1.3em;
  color: #f29221;
`

const Bio = styled.p`
  margin-top: 2em;
  font-size: 2em;
  color: #251c45;


  b {
  font-size: 1.2em;
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
const Logo = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`

export default class extends Component {
  render() {
    return (
      <Main>
        <Left>
          <Wrapper>
            <Logo><Image src={logo} alt='logo' /></Logo>
            <Bio>Hi, my name is Cíntia Falcão I’m a <b>UI/UX designer</b> and <b>visual designer</b></Bio>


          </Wrapper>
        </Left>
        <Right/>
        <Arrow><Image src={arrow} alt='arrow' /></Arrow>
      </Main>
    );
  }
}
