import React from 'react';
import ReactDOM from 'react-dom';
import MeetUpEvent from './components/MeetupEvent';
import Footer from './components/Footer';
import './styles/index.scss';

const AppRoot = () => {
  return (
    <div>
      <MeetUpEvent></MeetUpEvent>
      <Footer></Footer>
    </div>
  );
};

ReactDOM.render(<AppRoot />, document.getElementById('appRoot'));
