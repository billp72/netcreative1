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

const Project = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Container>
        <div className="text">
          <p style={{ fontWeight: '800' }}>{post.frontmatter.title}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <Img
          style={{ width: '70%' }}
          fluid={
            post.frontmatter.featuredImage
              ? post.frontmatter.featuredImage.childImageSharp.fluid
              : {}
          }
          alt="Large Image"
        />
      </Container>
    </Layout>
  );
};

Project.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Project;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
      html
    }
  }
`;