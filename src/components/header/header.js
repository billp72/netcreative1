import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import posed from 'react-pose';
import { Container, Image } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title, data }) => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
        <Title as="h1">{title}</Title>
      </Link>
      <Image>
        <img
          src={data.contentfulHeader.globalImages[0].file.url}
          alt={data.contentfulHeader.globalImages[0].file.fileName}
        />
      </Image>
      <Nav />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

const HeaderWithQuery = props => (
  <StaticQuery
    query={graphql`
      query Header {
        contentfulHeader {
          globalImages {
            file {
              url
              fileName
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
);

export default HeaderWithQuery;
