import React from 'react';
import { Link } from 'gatsby';
import Nav from './nav';
import styled from 'styled-components';


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }


  render() {

    const Container = styled.div`
    background: rebeccapurple;
    position: fixed;
    width: 100%;
    z-index: 10;
  `
    const Inner = styled.div`
    display: flex;
    // flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 620px;
    padding: 1rem 0 0.5rem 1rem;
    // text-align: center;
  `

    const Title = styled.h1`
    font-size: 2rem;
    margin: 0 0 1rem 0;
    width: 80%;
    a {
      color: white;
      text-decoration: none;
    }
  `

    const Menu = styled.span`
    color: white;
    font-family: 'Material Icons';
    font-size: 2rem;
    margin-top: 0.5rem;
    width: 20%;
  `
    return (
      <Container>
        <Inner>
          <Title>
            <Link to="/">{this.props.siteTitle}</Link>
          </Title>
          <Menu onClick={e => this.toggleMenu()} >
            menu
          </Menu>
        </Inner>
        <Nav isOpen={this.state.isOpen} toggleMenu={this.toggleMenu} />
      </Container>
    );
  }
};


export default Header
