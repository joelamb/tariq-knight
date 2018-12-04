import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const MainNav = styled.nav`
  display: ${props => props.isOpen ? "flex" : "none"};
  flex-direction : column;
  justify-content: space-around;
  width: 100%;
  a {
    // align-self: center;
    border-top: 1px solid rgba(255,255,255,0.3);
    color: white;
    font-family: sans-serif;
    font-size: 1.2rem;
    padding: 1rem 0;
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
    width: 100%;
  }
`

const Nav = ({ isOpen, toggleMenu }) => (
  <StaticQuery
    query={graphql`
    query NavQuery {
      allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___order]}) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `}
    render={data => {
      const links = data.allMarkdownRemark.edges
      return (
        <MainNav isOpen={isOpen}>
          {links.filter(edge => edge.node.frontmatter.path !== "about").map(edge => (
            <Link
              key={edge.node.id}
              onClick={() => toggleMenu()}
              to={`/#${edge.node.frontmatter.path}`}>
              {edge.node.frontmatter.path}
            </Link>
          ))}
        </MainNav>
      )
    }}
  />
)

export default Nav;
