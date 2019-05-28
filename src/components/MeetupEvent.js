import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Attendees from './Attendees';
import queryString from 'query-string';
import ReactHtmlParser from 'react-html-parser';
import EventHeader from './EventHeader';

import {
  URL_NAME,
  MEETUP_API_BASE_URL
} from '../constants';

const initialState = {
  meetUpEvent: {
    name: '',
    venue: {
      name: ''
    },
    group: {
      name: ''
    }
  }
};

class MeetUpEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  }

  componentDidMount() {
    const queryParams = queryString.stringify({
      'sign': true,
      'photo-host': 'public',
      'page': 1,
      'has_ended': false,
      'status': 'upcoming'
    });

    fetch(`${MEETUP_API_BASE_URL}${URL_NAME}/events?${queryParams}`, {
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          meetUpEvent: response[0]
        });
      }).catch(errObj => {
        console.log(errObj);
        this.setState({
          ...initialState
        });
      });
  }

  render() {
    const { meetUpEvent } = this.state;

    if(!meetUpEvent.name) return null;

    return (
      <div className='event-details'>
        <EventHeader
          duration={meetUpEvent.duration}
          eventName={meetUpEvent.name}
          groupName={meetUpEvent.group.name}
          eventDate={meetUpEvent.time}
          eventTime={meetUpEvent.local_time}
          venue={meetUpEvent.venue}></EventHeader>

        <div className="event-body">
          <h3>Description</h3>
          <div>{ReactHtmlParser(meetUpEvent.description)} </div>
        </div>
        <Attendees
          eventId={meetUpEvent.id}
          eventGroupName={URL_NAME}></Attendees>

      </div>
    );
  }
}

export default MeetUpEvent;
