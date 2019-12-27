import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import IO from 'components/io';
import Title from 'components/title';
import { Container } from './io-example.css';

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example, we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
const IOExample = ({ data }) => (
  <IO rootMargin="-50px">
    {({ isVisible }) => (
      <Container isVisible={isVisible}>
        <Title tag="span">
          <a href={data.footerJson.images[0].link}>
            <img src={data.footerJson.images[0].image.publicURL} alt="bonsai" />
            <br />
            <span style={{ color: 'white' }}>Bonsai</span>
          </a>
        </Title>
      </Container>
    )}
  </IO>
);

IOExample.propTypes = {
  data: PropTypes.object.isRequired,
};

const FooterWithQuery = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        footerJson {
          images {
            image {
              publicURL
            }
            title
            link
          }
        }
      }
    `}
    render={data => <IOExample data={data} />}
  />
);

export default FooterWithQuery;
