import React from 'react';
import TimeAgo from 'timeago-react';

import './App.css';
import data from './data/data.json';
import AthleteList from './AthleteList';
import SectionRandom from './SectionRandom';

function App() {
  const { athletes, last_updated } = data;

  return (
    <div className="app container">
      <h1>nventive Strava Challenge</h1>
      <h5>Last updated: {last_updated && <TimeAgo datetime={last_updated} locale='fr_CA' />}</h5>
      <AthleteList athletes={athletes} />
      <SectionRandom athletes={athletes}/>
    </div>
  );
}

export default App;
