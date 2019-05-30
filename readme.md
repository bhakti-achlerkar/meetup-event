# Meetup Event
A React application that shows the upcoming event of `ReactJS Dallas Chapter`.


## How to
### Run the app
```npm run start```

### Run the tests
```npm run test```

You can also run test continuously in ```watch``` mode
```npm run test-watch```

## Demo

## API support

This React app consumes Meetup.com web APIs to display information about an upcoming ReactJS Dallas event

### V3 Events
Get event information (the urlname for the group is “reactjs-dallas”):

Docs:

```https://secure.meetup.com/meetup_api/console/?path=/:urlname/events```

Url:

```https://api.meetup.com/reactjs-dallas/events?&sign=true&photo-host=public&page=1```

### V3 RSVPs
Get rsvps for an event. Use the “id” of the event returned from the call above.

Docs:

```https://secure.meetup.com/meetup_api/console/?path=%2F%3Aurlname%2Fevents%2F%3Aevent_id%2Frsvps```

Url:
```https://api.meetup.com/reactjs-dallas/events/{event-id}/rsvps?&sign=true&photo-host=public```

## Component Structure
```
AppRoot (index.js)
  |
  |--MeetupEvents
        |--EventHeader
          |--EventVenue
        |--Attendees
```

## Tooling
webpack 4, Babel 7, Jest, ESlint

## Deployment config
I used the following very handy utility to generate the simple webpack config:

https://generatewebpackconfig.netlify.com/

