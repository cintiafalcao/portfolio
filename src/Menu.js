import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import close from './images/close.png'
import menu from './images/menu.png'


const Image = styled.img`
  align-self: center;
  max-width: 100%;
`

const Menu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(5, 5, 22, 0.95);

  display: flex;
  align-items: center;
  justify-content: center;
`

const Ul = styled.ul`
  list-style: none;
`

const Li = styled.li`
  color: #e1e1eb;
  font-size: ${p => p.sub ? "2em" :  "2.5em" };

  &:hover {
    text-decoration: line-through;
  }

  & a {
    color: #e1e1eb;
    text-decoration: none;
  }
`

const Bar = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 50px;
  background: rgba(5, 5, 22, 0.9);
`
const Icon = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 1em;
  background: none;
  border: none;
  cursor: pointer;
  color: white; 
`

export default class MenuView extends Component {
  render() {
    return (
      <Menu>
        <Icon onClick={this.props.onHide}><Image src={close} alt='close' /></Icon>
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

export class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.url !== nextProps.url) {
      this.setState({ visible: false });
    }
  }

  render() {
    return (
      <div>
        { this.state.visible ? 
          <MenuView onHide={() => this.setState({visible: false})} />
          :
          <Bar>
            <Icon onClick={() => this.setState({visible: true})}><Image src={menu} alt='menu' /></Icon>
          </Bar>
        }
      </div>
    );
  }
}
