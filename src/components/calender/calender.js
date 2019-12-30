import React from 'react';
import PropTypes from 'prop-types';
import AddToCalendar from 'react-add-to-calendar';
import Moment from 'moment';

const Schedule = props => {
  const state = {
    event: {
      title: 'Meeting with Netcreative',
      description: 'To discuss project',
      startTime: Moment(props.date).format('MMM DD, YYYY hh:mm A'),
      endTime: Moment(props.date)
        .add('30', 'minute')
        .format('MMM DD, YYYY hh:mm A'),
    },
  };

  return <AddToCalendar event={state.event} />;
};

Schedule.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Schedule;
