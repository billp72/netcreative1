import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { Button } from 'components/modal/modal.css';

const link = {
  textAlign: 'center',
  marginTop: '-40px',
};
//#0358AD
const Index = ({ data }) => (
  <Layout>
    <Box color={data.homeJson.background.publicURL}>
      <Title as="h2" size="large">
        <div
          style={{
            textAlign: 'center',
            paddingTop: '12rem',
            color: 'white',
            fontWeight: '700',
          }}
          dangerouslySetInnerHTML={{
            __html: data.homeJson.content.childMarkdownRemark.html,
          }}
        />
        <div style={link}>
          <Button>
            <Link to="/about">LETS DO THIS</Link>
          </Button>
        </div>
      </Title>
    </Box>
    <Gallery items={data.homeJson.gallery} />

    <h1
      style={{
        height: '30vh',
        textAlign: 'center',
        paddingTop: '50px',
        fontSize: 'x-large',
      }}
    >
      9 years in design and development coupled with a passion for the business
      <br />
      means you and your users will have excellent experience.
    </h1>
    <Modal>
      <video
        src="https://i.imgur.com/gzFqNSW.mp4"
        playsInline
        loop
        autoPlay
        muted
      />
    </Modal>
    <IOExample />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      background {
        publicURL
      }
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        link
      }
    }
  }
`;
