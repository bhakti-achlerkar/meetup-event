import React from 'react';
import EventVenue from '../EventVenue';
import renderer from 'react-test-renderer';

const venue = {
  name: "VENUE_NAME",
  address_1: "Address1",
  address_2: "Address2",
  city: "CITY",
  state: "STATE",
  zip: "12344",
};

test('EventVenue rendered with event details', () => {
  const component = renderer.create(
    <EventVenue
      venue={venue}></EventVenue>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

