import React from 'react';
import Layout from 'components/layout';
import styled from 'styled-components';
import IOExample from 'components/io-example';
import MEDIA from 'helpers/mediaTemplates';

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
  ${MEDIA.PHONE`
      width: 70%;
      margin: 10px 50% 10px 15%;
  `};

  ${MEDIA.TABLET`
      width: 70%;
      margin: 10px 50% 10px 15%;
  `};
`;

const Thanks = () => (
  <Layout>
    <Thank>
      <h1>Great!</h1>
      <br />
      <p>We will be in touch to talk more about your project</p>
      <p>
        If it is urgent, you can always reach out to us by phone: <br />
        <span style={{ color: '#4180C5' }}>(908) 336 - 4320</span>
      </p>
    </Thank>
    <IOExample />
  </Layout>
);

export default Thanks;
