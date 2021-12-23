import React from 'react';
import Title from './Title';

function iframe() {
  return {
      /*__html: '<iframe src="./bangle.html" width="600" height="200"></iframe>'*/
      __html: '<iframe src="./accelerometer.html" width="700" height="500"></iframe>'
  }
}

export default function Accelerometer() {
  return (
      <div>
          <Title>Accelerometer Data</Title>

          <div dangerouslySetInnerHTML={iframe()} />
      </div>)
}