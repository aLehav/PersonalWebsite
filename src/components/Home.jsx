// Home.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Events from './Events';
import data from '../data.json';

function Home() {
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const filter = queryParams.filter || '';

  let filteredEvents = data.events;
  let pageTitle = '';

  if (filter) {
    filteredEvents = data.events.filter((event) =>
      event.categories.includes(filter)
    );
    pageTitle = filter.replace(/([A-Z])/g, ' $1').trim();
  }

  return (
    <div>
      <h1>{pageTitle}</h1>
      <div>
        <Events events={filteredEvents} />
      </div>
    </div>
  );
}

export default Home;
