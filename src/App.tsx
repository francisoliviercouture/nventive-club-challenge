import React from 'react';
import TimeAgo from 'timeago-react';

import './App.css';
import data from './data/data.json';
import SectionRandom from './SectionRandom';
import TableAthlete from './components/TableAthlete';

function App() {
  const { athletes, date_from, date_to, last_updated } = data;

  return (
    <div className="app container">
      <h5 style={{ textAlign: 'end', marginBottom: 0 }}>Last updated: {last_updated && <TimeAgo datetime={last_updated} locale='fr_CA' />}</h5>
      <h1>nventive Strava Challenge</h1>
      <blockquote>
        <p><em>To be eligible for the weekly draw, a participant must, at least, <b>run / walk 15 km</b> or <b>cycle 30 km</b>.</em></p>
      </blockquote>
      <span style={{ marginBottom: '1rem' }}><b>{date_from}</b> to <b>{date_to}</b> </span>
      <TableAthlete athletes={athletes} />
      <SectionRandom athletes={athletes} />
    </div>
  );
}

export default App;
