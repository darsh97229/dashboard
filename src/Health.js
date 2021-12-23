import React from 'react';
import Title from './Title';

function iframe() {
  return {
      __html: '<iframe src="./health.html" width="300" height="125"></iframe>'
  }
}

export default function Health() {
  return (
      <div>
          <Title>Health Data</Title>

          <div dangerouslySetInnerHTML={iframe()} />
      </div>)
}