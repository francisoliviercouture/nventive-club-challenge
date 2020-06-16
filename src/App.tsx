import React from 'react';
import TimeAgo from 'timeago-react';

import './App.css';
import data from './data/data.json';
import AthleteList from './AthleteList';
import SectionRandom from './SectionRandom';

function App() {
  const { athletes, date_from, date_to, last_updated } = data;

  return (
    <div className="app container">
      <h1>nventive Strava Challenge</h1>
      <h5>Last updated: {last_updated && <TimeAgo datetime={last_updated} locale='fr_CA' />}</h5>
      <span><b>{date_from} to {date_to}</b></span>
      <AthleteList athletes={athletes} />
      <SectionRandom athletes={athletes} />
    </div>
  );
}

export default App;
