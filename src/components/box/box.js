import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './box.css';

const Box = ({ children, color }) => (
  <Container inputColor={color}>{children}</Container>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

export default Box;
