import React from 'react';
import EventHeader from '../EventHeader';
import renderer from 'react-test-renderer';


test('EventHeader rendered with event details', () => {
  const component = renderer.create(
    <EventHeader
      eventName="EVENT_NAME"
      groupName="GROUP_NAME"
      venue={{ name: "VENUE_NAME" }}></EventHeader>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
