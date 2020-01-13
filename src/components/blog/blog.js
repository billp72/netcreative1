import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/blog/item';
import { Container } from './blog.css';

const Blog = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </Container>
);

Blog.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Blog;
