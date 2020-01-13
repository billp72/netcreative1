import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import Blog from 'components/blog';
//import Modal from 'containers/modal';
import { graphql } from 'gatsby';
import { Button } from 'components/modal/modal.css';

const link = {
  textAlign: 'center',
  marginTop: '-40px',
};
const Moniker = styled.div`
  text-align: center;
  padding-top: 2rem;
  color: white;
  font-weight: 700;
  ${MEDIA.PHONE`
      padding-top: 6rem;
    `};

  ${MEDIA.TABLET`
      padding-top: 6rem;
  `};
`;
//#0358AD
const Index = ({ data }) => (
  <Layout>
    <Box color={data.homeJson.background.publicURL}>
      <Title as="h2" size="large">
        <Moniker>
          <span
            dangerouslySetInnerHTML={{
              __html: data.homeJson.content.childMarkdownRemark.html,
            }}
          />
        </Moniker>
        <div style={link}>
          <Button>
            <Link style={{ fontWeight: '800' }} to="/contact">
              Lets Do This
            </Link>
          </Button>
        </div>
      </Title>
    </Box>
    <Gallery items={data.homeJson.gallery} />
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <h1 style={{ color: '#757575' }}>{data.homeJson.blog}</h1>
      <Blog items={data.homeJson.entries} />
    </div>
    {/*<Modal>
      <video
        src="https://i.imgur.com/gzFqNSW.mp4"
        playsInline
        loop
        autoPlay
        muted
      />
    </Modal>*/}
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
      blog
      entries {
        linkB
        image {
          publicURL
        }
        date
        title
      }
    }
  }
`;
