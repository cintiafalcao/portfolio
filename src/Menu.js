import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Menu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);

  display: flex;
  align-items: center;
  justify-content: center;
`

const Ul = styled.ul`
  list-style: none;
`

const Li = styled.li`
  color: white;
  font-size: ${p => p.sub ? "2em" :  "2.5em" };

  &:hover {
    text-decoration: line-through;
  }

  & a {
    color: white;
    text-decoration: none;
  }
`

export default class extends Component {
  render() {
    if (!this.props.visible) {
      return null;
    }

    return (
      <Menu>
        <Ul>
          <Li><Link to="/"> Home</Link></Li>
          <Li>Work</Li>
              <Ul>
                <Li sub><Link to="/category/mobile">Mobile</Link></Li>
                <Li sub><Link to="/category/web">Website</Link></Li>
                <Li sub><Link to="/category/illustration">Illustration</Link></Li>
                <Li sub><Link to="/category/logo">Logo</Link></Li>
                <Li sub><Link to="/category/painting">Painting</Link></Li>
              </Ul>
          <Li>Contact</Li>
        </Ul>
      </Menu>
    );
  }
}
