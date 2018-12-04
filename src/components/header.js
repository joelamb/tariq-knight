import React from 'react';
import { Link } from 'gatsby';
import Nav from './nav';
import styled from 'styled-components';


const Header = ({ siteTitle }) => {
  const Container = styled.div`
    background: rebeccapurple;
    position: fixed;
    width: 100%;
    z-index: 10;
  `
  const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 620px;
    padding: 1.45rem 1.0875rem;
  `

  const Title = styled.h1`
    font-size: 1.5rem;
    margin: 0rem;
    a {
      color: white;
      text-decoration: none;
    }
  `

  return (
    <Container>
      <Inner>
        <Title>
          <Link to="/">{siteTitle}</Link>
        </Title>
        <Nav />
      </Inner>
    </Container>
  );
}

export default Header
