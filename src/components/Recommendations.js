import React from 'react';

const Recommendations = (props) => {
  if (props.college_matches.length === 0) {
    return(
        <div>
          <p>No colleges matching your criteria have been found.</p>
        </div>
    );
  } else {
    return(
      <div id="recommendations">
        <h2>Recommendations</h2>
        {props.college_matches.map((college) => (
              <div className="college">
                <h3>{college.name}</h3>
                <p>{college.description}</p>
              </div>
          ))}
      </div>
    );
  }
}

export default Recommendations;
