import React, { Component } from 'react'
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
`

export default class extends Component {
  render() {
    if (!this.props.visible) {
      return null;
    }

    return (
      <Menu>
        <Ul>
          <Li>About</Li>
          <Li>Work</Li>
              <Ul>
                <Li sub>Mobile</Li>
                <Li sub>Website</Li>
                <Li sub>Illustration</Li>
                <Li sub>Logo</Li>
              </Ul>
          <Li>Contact</Li>
        </Ul>
      </Menu>
    );
  }
}
