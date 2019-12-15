import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';
import ItemWrapper from './itemWrapper';
import { Link } from 'gatsby';

const Item = ({ title, copy, linkA, linkB, image }) => (
  <ItemWrapper
    conditionA={linkA}
    conditionB={linkB}
    wrapperA={children => <a href={linkA}>{children}</a>}
    wrapperB={children => <Link to={linkB}>{children}</Link>}
  >
    <figure>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />

      <figcaption>
        <Title>{title}</Title>
        <Copy>{copy}</Copy>
      </figcaption>
    </figure>
  </ItemWrapper>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  linkA: PropTypes.string,
  linkB: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
