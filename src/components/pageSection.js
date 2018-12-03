import React from 'react';

const PageSection = ({ content }) => (
  <section>
    <h2>{content.frontmatter.title}</h2>
    <div dangerouslySetInnerHTML={{ __html: content.html }} />
  </section>
);

export default PageSection;