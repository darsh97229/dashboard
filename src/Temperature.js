import React from 'react';
import Title from './Title';

function iframe() {
  return {
      __html: '<iframe src="./temperature.html" width="250" height="100"></iframe>'
  }
}

export default function Temperature() {
  return (
      <div>
          <Title>Temperature Data</Title>

          <div dangerouslySetInnerHTML={iframe()} />
      </div>)
}