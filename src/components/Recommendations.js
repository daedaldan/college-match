import React from 'react';

const Recommendations = (props) => {
  // if no colleges are in list of matches, inform user
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
          {/* for each college in list of matches, create div with college's image, information, and website link */}
          {props.college_matches.map((college) => (
              <div className="college">
                <div className="primary-info">
                  <img src={college.image}/>
                  <h3>{college.name}</h3>
                  {/* Only include first 4 sentences of college's description */}
                  <p>{college.description.split(". ").slice(0, 4).join(". ") + "."}</p>
                </div>
                <div className="secondary-info">
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
              </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Recommendations;
