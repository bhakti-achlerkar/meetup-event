import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import classnames from 'classnames';

import {
  MEETUP_API_BASE_URL
} from '../constants';

class Attendees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendees: [],
      currentFilter: 'yes'
    };
  }

  static propTypes= {
    eventId: PropTypes.string.isRequired,
    eventGroupName: PropTypes.string.isRequired
  };

  componentDidMount() {
    const queryParams = queryString.stringify({
      'sign': true,
      'photo-host': 'public'
    });

    const queryStr =
      `${MEETUP_API_BASE_URL}${this.props.eventGroupName}/events/${this.props.eventId}/rsvps?`;

    fetch(`${queryStr}${queryParams}`, {
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          attendees: response
        });
      }).catch(errObj => {
        console.log(errObj);
      });
  }

  handleFilterChange = (filterValue) => {
    this.setState({
      currentFilter: filterValue
    });
  }


  render() {
    const { attendees, currentFilter } = this.state;
    let filteredAttendees = attendees.filter((attendee) =>
      attendee.response === currentFilter);
    return (
      <div className="attendees-container">
        <h3>Attendees
          {attendees.length > 0 && <span> ({attendees.length})</span>}
        </h3>
        <div className="rsvp-filters">
          <div
            className={classnames("rsvp-filter__yes",
              { 'rsvp-filter__active' : currentFilter === 'yes' })}
            onClick={() => this.handleFilterChange('yes')}>
            Going
            {currentFilter === 'yes' && <span> ({filteredAttendees.length})</span>}</div>
          <div
            className={classnames("rsvp-filter__no",
              { 'rsvp-filter__active' : currentFilter === 'no' })}
            onClick={() => this.handleFilterChange('no')}>
            Not going
            {currentFilter === 'no' && <span> ({filteredAttendees.length})</span>}</div>
          <div
            className={classnames("rsvp-filter__waitlist",
              { 'rsvp-filter__active' : currentFilter === 'waitlist' })}
            onClick={() => this.handleFilterChange('waitlist')}>
            Waitlist
            {currentFilter === 'waitlist' && <span> ({filteredAttendees.length})</span>}</div>
        </div>

        <div className="attendees-list">
          {
            filteredAttendees.map((attendee) =>
              <div key={attendee.member.id} className="attendee">
                <div>
                  <img className="attendee-avatar"
                    src={attendee.member.photo && attendee.member.photo.photo_link || ''}
                    alt={attendee.member.name}/>
                </div>
                <div>{attendee.member.name} </div>
              </div>)
          }
        </div>
      </div>

    );
  }
}

export default Attendees;
