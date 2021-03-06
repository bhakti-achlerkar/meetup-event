import React from 'react';
import Attendees from '../Attendees';
import renderer from 'react-test-renderer';

const mockResponse = (status, statusText, response) => {
  return new Promise((resolve, reject) => {
    if(status == 200) {
      return resolve(response);
    } else {
      reject();
    }
  });};

window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve(mockResponse(200, null, "[]")));

test('Attendees rendered with event details', () => {
  const component = renderer.create(
    <Attendees
      eventId="EVENT_ID"
      eventGroupName="GROUP_NAME"></Attendees>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
