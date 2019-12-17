import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import image from '../../../../content/images/google.png';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <a href="https://app.hellobonsai.com/u/bill-p">Hire Us</a>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/gatsby">Gatsby</Link>
      </li>
      <li>
        <img width="27" src={image} alt="Google for Business" />
      </li>
    </ul>
  </Container>
);

export default Nav;
