import React, { Component } from 'react'
import styled from 'styled-components'

import Main from './Main'
import Menu from './Menu'
import Timeline from './Timeline'

import close from './images/close.png'
import menu from './images/menu.png'


const Image = styled.img`
  align-self: center;
  max-width: 100%;
`

const Home = styled.main``

const MenuButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
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
        { this.state.menuActive
          ? <Menu onHide={this.toggleMenu} />
          : <MenuButton onClick={this.toggleMenu}><Image src={menu} alt='menu' /></MenuButton>
        }
        <Main />
        <Timeline filter={p => p.featured} />
      </Home>
    );
  }
}
