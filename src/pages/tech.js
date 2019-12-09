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
        src={data.contentfulHomePage.images[2].file.url}
        alt={data.contentfulHomePage.images[2].file.fileName}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: data.contentfulHomePage.about.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);
const responsiveimage = {
  width: '30%',
  height: '10%',
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
    }
  }
`;
