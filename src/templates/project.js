import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Img from 'gatsby-image';
import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

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
    width: 70%;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem;
  }
  .li-style {
    padding-left: 15px;
    li {
      padding: 0 0 10px 0;
      vertical-align: baseline;
      border: 0;
    }
  }
`;

export const P1 = styled.p`
  h1.align {
    text-align: center;
    font-size: 4rem;
    text-transform: uppercase;
  }
  ${MEDIA.PHONE`
    h1.align {
      font-size: 3rem;
      margin-bottom: 5rem;
    } 
  `};
  ${MEDIA.TABLET`
    h1.align {
      font-size:3rem;
      margin-bottom: 5rem;
    }
  `};
`;
const Project = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Container>
        <div className="text">
          <P1>
            <h1 className="align">{post.frontmatter.title}</h1>
          </P1>
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
