import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Section = ({ sectionTitle }) => {
  console.log(sectionTitle);
  return (
    < StaticQuery
      query={
        graphql`
      query {
        allFile(filter: { name:{ eq: "intro"} }) {
          edges {
           node {
            childMarkdownRemark {
              frontmatter{
                title
              }
              html
            }
          }
        }
      }
    }
  `}
      render={
        data => (
          <div>
            <h2>
              {data.allFile.edges[0].node.childMarkdownRemark.frontmatter.title}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: data.allFile.edges[0].node.childMarkdownRemark.html }} />

          </div >
        )
      }
    />
  )
};

export default Section;
