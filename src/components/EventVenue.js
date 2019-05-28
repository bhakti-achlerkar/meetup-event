import React from 'react';
import PropTypes from 'prop-types';

const EventVenue = ({ venue }) => {
  return (
    <div className="event-host">
      <span><i className="fas fa-map-marker fa-lg"></i></span>
      <div>
        <div> {venue.name}</div>
        <div className="event-address">
          <span>{venue.address_1}</span>
          <span>{ venue.address_2}</span>
        </div>
        <div className="event-address">{venue.city}, {venue.state} - {venue.zip}</div>
      </div>
    </div>
  );
};

EventVenue.propTypes = {
  venue: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address_1: PropTypes.string,
    address_2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
  })
};

export default EventVenue;
