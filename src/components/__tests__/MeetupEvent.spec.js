import React from 'react';
import MeetupEvent from '../MeetupEvent';
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
  Promise.resolve(mockResponse(200, null, "{name: '',venue:{name:''},group:{name:''}}")));

test('MeetupEvent rendered with event details', () => {
  const component = renderer.create(
    <MeetupEvent></MeetupEvent>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
