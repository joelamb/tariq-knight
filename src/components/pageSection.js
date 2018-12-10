import React from 'react';
import styled from 'styled-components';

const SectionHeroImage = styled.div`
  background-image: url(${props => `.${props.bgImage}`});
  background-position: 50% 0%;
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: cover;
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
  @media (min-width: 400px){
    background-attachment: fixed;
    h2{
      max-width: 620px;
    }
  }
`

const SectionBody = styled.div`
  margin: 0 auto 4rem auto;
  max-width: 620px;
  padding: 0 1rem;
  h3{
    justify-content: flex-start;
  }
  a.gatsby-resp-image-link{
    display: inline-block;
    margin: 0;
    width: 5rem;
  }
  a {
    color: rebeccapurple;
    font-family: Sans-serif;
    text-decoration:none;
  }
  blockquote{
    font-family: Georgia, serif;
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 300;
    margin-left: 0;
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