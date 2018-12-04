import React from 'react';
import styled from 'styled-components';

const SectionHeroImage = styled.div`
  background-image: url(${props => `.${props.bgImage}`});
  background-size: cover;
  background-position: 50% 0%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  display: flex;
  height: 75vh;
  margin-bottom: 2rem;
  h2{
    align-self: flex-end;
    color: white;
    font-size: 2rem;
    line-height: 1.2;
    margin: 0 auto 1rem auto;
    padding: 0 1rem;
    text-align: left;
    text-shadow: 2px 2px 6px rgba(0,0,0,0.6);
    width: 100%;
  }
  h3{
    color: white;
  }
`

const SectionBody = styled.div`
  margin: 0 auto 4rem auto;
  max-width: 620px;
  padding: 0 1rem;
  img{
    border: 8px solid white;
    box-shadow: 1px 1px 8px rgba(0,0,0,0.55);
    display: block;
    margin: 2rem auto;
    transform: rotate(0.0125turn);
    width: 60%;
  }
  a {
    color: rebeccapurple;
    font-family: Sans-serif;
    // font-weight: 700;
    text-decoration:none;

  }
`

const PageSection = ({ content }) => {
  return (
    <section id={content.frontmatter.path}>
      <SectionHeroImage bgImage={content.frontmatter.attachments[0].publicURL}>
        <h2>{content.frontmatter.title}</h2>
      </SectionHeroImage>
      <SectionBody dangerouslySetInnerHTML={{ __html: content.html }} />
    </section>
  )
};

export default PageSection;