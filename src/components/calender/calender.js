import React from 'react';
import PropTypes from 'prop-types';
import AddToCalendar from 'react-add-to-calendar';
import Moment from 'moment';
import './calender.css';

const Schedule = props => {
  const startDatetime = Moment(props.date).utc();
  const endDatetime = startDatetime.clone().add(30, 'minute');
  const duration = Moment.duration(endDatetime.diff(startDatetime)).asHours();

  const state = {
    event: {
      title: 'Meeting with Netcreative',
      description: 'To discuss project',
      duration,
      location: 'Millburn, NJ',
      startTime: startDatetime.format('YYYYMMDDTHHmmssZ'),
      endTime: endDatetime.format('YYYYMMDDTHHmmssZ'),
    },
  };

  return <AddToCalendar event={state.event} />;
};

Schedule.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Schedule;
