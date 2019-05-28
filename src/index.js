import React from 'react';
import ReactDOM from 'react-dom';
import MeetUpEvent from './components/MeetupEvent';
import './styles/index.scss';

const AppRoot = () => {
  return (
    <div>
      <MeetUpEvent></MeetUpEvent>
    </div>
  );
};

ReactDOM.render(<AppRoot />, document.getElementById('appRoot'));
