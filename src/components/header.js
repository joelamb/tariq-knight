import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';


const Header = ({ siteTitle }) => {
  const Container = styled.div`
    background: rebeccapurple;
  `
  const Inner = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  `

  const Title = styled.h1`
    margin: 0rem;
  `

  return (
    <Container>
      <Inner>
        <Title>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </Title>
      </Inner>
    </Container>
  );
}

export default Header
