import React from 'react';
import styled from 'styled-components';
import intro from '../images/tariq_intro.jpg';
import showreel from '../images/tariq_showreel.jpg';

const SectionHeroImage = styled.div`
  align-content: center;
  background: gainsboro;
  background-image: url(${props => `.${props.bgImage}`});
  background-size: cover;
  background-position:center;
  background-attachment: fixed;
  display: flex;
  height: 100vh;
  margin-bottom: 1rem;
  h2{
    align-self: center;
    color: red;
    margin: 0 auto;
    max-width: 960px;
  }
  h3{
    color: white;
  }
`

const SectionBody = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 0 1rem;
`



const PageSection = ({ content }) => {
  return (
    <section>
      <SectionHeroImage bgImage={content.frontmatter.attachments[0].publicURL}>
        <h2>{content.frontmatter.title}</h2>
      </SectionHeroImage>
      <SectionBody dangerouslySetInnerHTML={{ __html: content.html }} />
    </section>
  )
};

export default PageSection;