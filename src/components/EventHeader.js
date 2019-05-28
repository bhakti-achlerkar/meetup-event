import React from 'react';
import PropTypes from 'prop-types';
import EventVenue from './EventVenue';
import { formatDate, formatDuration } from '../utils';

const EventHeader = ({ duration = '5400000',
  eventName='',
  eventDate,
  groupName='',
  venue={} }) => {
  return (
    <header className="event-header">
      <h1>{eventName}</h1>
      <h3 className="event-group">By {groupName}</h3>
      <div className="event-time-venue">
        <div className="event-time-details">
          <i className="fas fa-clock fa-lg"></i>
          <div>
            <div>{formatDate(eventDate)}</div>
            <div>{formatDuration(eventDate, duration)}</div>
          </div>
        </div>
        <EventVenue venue={venue}></EventVenue>
      </div>
    </header>
  );
};

EventHeader.propTypes = {
  duration: PropTypes.string,
  eventName: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  eventDate: PropTypes.number,
  venue: PropTypes.object
};

export default EventHeader;
