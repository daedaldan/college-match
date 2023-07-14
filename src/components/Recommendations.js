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
        <div id="colleges">
          {props.college_matches.map((college) => (
              <div className="college">
                <img src={college.image}/>
                <h3>{college.name}</h3>
                <p>{college.description.split(". ").slice(0, 4).join(". ") + "."}</p>
                <div>
                  <p className="academics"><b>Average SAT</b> {college.SAT}</p>
                  <p className="academics"><b>Average GPA</b> {college.GPA ? college.GPA : "N/A"}</p>
                </div>
                <div className="tags">
                  <p className="tag">{college.geography}</p>
                  <p className="tag">{college.size}</p>
                  <p className="tag">{college.urbanization}</p>
                  <p className="tag">{college.ownership}</p>
                </div>
                <a href={college.link}>Learn More</a>
              </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Recommendations;
