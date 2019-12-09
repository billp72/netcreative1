import React from 'react';
import IO from 'components/io';
import Title from 'components/title';
import { Container } from './io-example.css';

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example, we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
const IOExample = () => (
  <IO rootMargin="-50px">
    {({ isVisible }) => (
      <Container isVisible={isVisible}>
        <Title tag="span">
          William Pope&nbsp;|&nbsp; william@netcreative.org&nbsp;|&nbsp;
          <a
            style={{ color: 'white' }}
            href="https://app.hellobonsai.com/u/bill-p"
          >
            hire me
          </a>
        </Title>
      </Container>
    )}
  </IO>
);

export default IOExample;
