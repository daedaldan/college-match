import React from 'react';

const Recommendations = (props) => {
  if (Object.keys(props.college_matches).length === 0) {
    return(
        <div>
          <h2>Recommendations</h2>
          <p>No colleges matching your criteria have been found.</p>
        </div>
    );
  } else {
    return(
      <div>
          <h2>Recommendations</h2>
          <p>Some colleges have been found.</p>
      </div>
    );
  }
}

export default Recommendations;
