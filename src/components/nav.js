import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const MainNav = styled.nav`
  display: flex;
  align-self: flex-end;
  // margin-left: 2rem;
  a {
    margin-left: 2rem;
    color: white;
    text-decoration: none;
  }
`

const Nav = () => (
  <MainNav>
    <Link to="/#tv">television</Link>
    <Link to="/#booking">booking</Link>
    <Link to="/#reviews">reviews</Link>
    <Link to="/#contact">contact</Link>
  </MainNav>
);

export default Nav;
