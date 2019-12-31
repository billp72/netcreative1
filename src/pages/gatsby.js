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
        src={data.contentfulGatsby.pics[0].file.url}
        alt={data.contentfulGatsby.pics[0].file.fileName}
      />
      <img
        style={responsiveimage}
        src={data.contentfulGatsby.pics[1].file.url}
        alt={data.contentfulGatsby.pics[1].file.fileName}
      />
      <img
        style={responsiveimage}
        src={data.contentfulGatsby.pics[2].file.url}
        alt={data.contentfulGatsby.pics[2].file.fileName}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: data.contentfulGatsby.about.childMarkdownRemark.html,
        }}
      />
      <br />
      <p>Supporting links</p>
      <p style={{ padding: '10px', border: '1px solid #E6E2E1' }}>
        <a href={data.contentfulGatsby.links.contentful}>Contentful</a>
        <br />
        <a href={data.contentfulGatsby.links.what}>What is Gatsby</a>
        <br />
        <a href={data.contentfulGatsby.links.starters}>Themes and starters</a>
        <br />
        <a href={data.contentfulGatsby.links.netlify}>Netlify</a>
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
  query Gatsby {
    contentfulGatsby {
      about {
        childMarkdownRemark {
          html
        }
      }
      pics {
        file {
          fileName
          url
        }
      }
      links {
        starters
        contentful
        what
        netlify
      }
    }
  }
`;
