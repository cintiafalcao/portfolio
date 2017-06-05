import React, { Component } from 'react'
import styled from 'styled-components'

import Main from './Main'
import Menu from './Menu'
import Timeline from './Timeline'

const Home = styled.main``

const MenuButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2em;
  background: none;
  border: none;
  cursor: pointer;
`

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = { menuActive: false };
  }

  toggleMenu = () => this.setState(state => ({
    menuActive: !state.menuActive,
  }))

  render() {
    return (
      <Home>
        <Menu visible={this.state.menuActive} />
        <MenuButton onClick={this.toggleMenu}>🍔</MenuButton>
        <Main />
        <Timeline filter={p => p.featured} />
      </Home>
    );
  }
}
