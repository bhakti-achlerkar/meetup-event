import React from 'react';
import Attendees from '../Attendees';
import renderer from 'react-test-renderer';


test('Attendees rendered with event details', () => {
  const component = renderer.create(
    <Attendees
      duration="5400000"
      eventId="EVENT_ID"
      eventGroupName="GROUP_NAME"></Attendees>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
