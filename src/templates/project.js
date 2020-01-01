import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Img from 'gatsby-image';
import styled from 'styled-components';
//import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  .gatsby-image-wrapper {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
  div.text {
    width: 60%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem;
  }
`;

export default function Project({ data }) {
  const post = data.markdownRemark;
  console.log(data)
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
  return (
    <Layout>
      <Container>
        <div className="text">
          <p style={{ fontWeight: '800' }}>{post.frontmatter.title}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <Img style={{ width: '50%' }} fluid={featuredImgFluid} />
      </Container>
    </Layout>
  );
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
