import React from 'react';
import Layout from 'components/layout';
import styled from 'styled-components';

const Thank = styled.div`
  width: 55%;
  margin: 10px 30% 10px 25%;
  padding: 10px 0;
  border: 1px solid gray;
  border-radius: 10px;
  font-weight: 600;
  h1,
  p {
    text-align: center;
  }
  h1 {
    font-size: 2em;
  }
`;

const Thanks = () => (
  <Layout>
    <Thank>
      <h1>Great!</h1>
      <br />
      <p>We will be in touch to talk more about your project</p>
      <p>
        If it is urgent, you can always reach out to us by phone:{' '}
        <span style={{ color: '#4180C5' }}>(908) 336 - 4320</span>
      </p>
    </Thank>
  </Layout>
);

export default Thanks;
