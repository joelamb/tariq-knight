import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import PageSection from '../components/pageSection';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const sections = edges.map(edge => <PageSection content={edge.node} />);
  return (
    <Layout>
      {sections}
    </Layout >
  );
}

export default IndexPage;

export const pageQuery = graphql`
query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
      edges {
        node {
          frontmatter{
            title
          }
          html
        }
      }
    }
  }
`