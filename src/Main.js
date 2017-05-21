import React, { Component } from 'react'
import styled from 'styled-components'

import ProfilePhoto from './home_photo.png'

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
`
const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0 15%;
`

const Title = styled.h1`
  font-size: 3.5em;
  color: orange;
  text-transform: uppercase;
`

const Subtitle = styled.h2`
  font-size: 2.5em;
  margin-top: -1.3em;
  color: navy;
`

const Bio = styled.p`
  font-size: 1.5em;
`

const Right = styled.div`
  flex: 1;
  background: url(${ProfilePhoto});
`

export default class extends Component {
  render() {
    return (
      <Main>
        <Left>
          <Wrapper>
            <Title>Cíntia Falcão</Title>
            <Subtitle>UI/UX Designer</Subtitle>
            <Bio>I'm an UI/UX designer &amp; visual designer from Brazil living in Amsterdam, with 13 years of experience.</Bio>
          </Wrapper>
        </Left>
        <Right>
        </Right>
      </Main>
    );
  }
}
