import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import image from '../../../../content/images/google.png';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="https://community.shopify.com/c/user/viewprofilepage/user-id/623407">
          <img width="27" src={image} alt="Shopify partner profile" />
        </a>
      </li>
    </ul>
  </Container>
);

export default Nav;
