import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

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
    </ul>
  </Container>
);

export default Nav;
