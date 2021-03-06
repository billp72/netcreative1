import React from 'react';
import Layout from 'components/layout';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Calender from 'components/calender/calender';
import MEDIA from 'helpers/mediaTemplates';
import Moment from 'react-moment';
import 'moment-timezone';
import queryString from 'query-string';

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
  .react-add-to-calendar {
    text-align: center;
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

const Thanks = props => {
  const parseDate = () => {
    return queryString.parse(props.location.search) || '';
  };

  const formatDate = () => {
    if (parseDate().date && parseDate().time) {
      return parseDate().date + 'T' + parseDate().time;
    } else {
      return '';
    }
  };
  let schedule, text;

  if (formatDate()) {
    text = 'You have an appointment scheduled on ';
    schedule = <Moment format="MMM DD, YYYY hh:mm A">{formatDate()}</Moment>;
  } else {
    text = '';
    schedule = 'No appointment scheduled';
  }
  return (
    <Layout>
      <Thank>
        <h1>Great!</h1>
        <br />
        <p>
          {text}
          {schedule}
        </p>
        <p>
          If you need immediate assistance, you can always reach out to us by
          phone: <br />
          <span style={{ color: '#4180C5' }}>(908) 336 - 4320</span>
        </p>
        <Calender date={formatDate()}></Calender>
      </Thank>
    </Layout>
  );
};

Thanks.propTypes = {
  location: PropTypes.object.isRequired,
  search: PropTypes.string.isRequired,
};

export default Thanks;
