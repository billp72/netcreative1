import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';
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
            <a
              style={{ fontWeight: '800' }}
              href="https://app.hellobonsai.com/u/bill-p"
            >
              Lets Do This
            </a>
          </Button>
        </div>
      </Title>
    </Box>
    <Gallery items={data.homeJson.gallery} />
    <h1
      style={{
        height: '30vh',
        paddingTop: '50px',
        fontSize: 'x-large',
        textAlign: 'center',
      }}
    >
      Ten years as a designer and developer coupled with a passion for the
      <br />
      business means you and your customers will have an excellent experience.
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
        linkA
        linkB
      }
    }
  }
`;
