import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';

const Item = ({ title, copy, link, image }) => (
  <a href={link}>
    <figure>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />

      <figcaption>
        <Title>{title}</Title>
        <Copy>{copy}</Copy>
      </figcaption>
    </figure>
  </a>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
