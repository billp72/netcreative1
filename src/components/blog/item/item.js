import React from 'react';
import PropTypes from 'prop-types';
import { Title, Anchor } from './item.css';
import { Link } from 'gatsby';

const Item = ({ linkB, image, date, title }) => (
  <Anchor>
    <Link to={linkB}>
      <Title>
        <img
          style={{ width: '25px', display: 'inline' }}
          src={image ? image.publicURL : {}}
          alt={title}
        />
        {title} {date}
      </Title>
    </Link>
  </Anchor>
);

Item.propTypes = {
  linkB: PropTypes.string,
  image: PropTypes.object.isRequired,
  date: PropTypes.string,
  title: PropTypes.string,
};

export default Item;
