import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const About = ({ data }) => (
  <Layout>
    <Head pageTitle="Tech" />
    <Box>
      <img
        style={responsiveimage}
        src={data.contentfulHomePage.images[3].file.url}
        alt={data.contentfulHomePage.images[3].file.fileName}
      />
      <img
        style={responsiveimage}
        src={data.contentfulHomePage.images[4].file.url}
        alt={data.contentfulHomePage.images[4].file.fileName}
      />
      <img
        style={responsiveimage}
        src={data.contentfulHomePage.images[5].file.url}
        alt={data.contentfulHomePage.images[5].file.fileName}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: data.contentfulHomePage.about.childMarkdownRemark.html,
        }}
      />
      <br />
      <p>Supporting links</p>
      <p style={{ padding: '10px', border: '1px solid #E6E2E1' }}>
        <a href={data.contentfulHomePage.links.contentful}>Contentful</a>
        <br />
        <a href={data.contentfulHomePage.links.what}>What is Gatsby</a>
        <br />
        <a href={data.contentfulHomePage.links.starters}>Themes and starters</a>
        <br />
        <a href={data.contentfulHomePage.links.graphql}>GraphQL</a>
      </p>
    </Box>
  </Layout>
);
const responsiveimage = {
  width: '5%',
  height: '5%',
};

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query HomePage {
    contentfulHomePage {
      about {
        childMarkdownRemark {
          html
        }
      }
      images {
        file {
          fileName
          url
        }
      }
      links {
        starters
        contentful
        what
        graphql
      }
    }
  }
`;
