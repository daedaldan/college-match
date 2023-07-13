import React, { Component } from 'react';
import Questions from './Questions.js';
import Recommendations from './Recommendations.js';

export default class Recommender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question_answers: {
        "SAT": null,
        "GPA": null,
        "geography": [],
        "sizes": [],
        "urbanization": [],
        "ownership": []
      },
      college_matches: {}
    };

    this.match_colleges = this.match_colleges.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  // add colleges listed in colleges.csv that match question_answers to college-matches
  match_colleges() {

  }

  // update question_answers based on user interactions with Questions component
  updateValue(question, answer) {
    let new_answers = this.state.question_answers;
    new_answers[question] = answer;
    this.setState({question_answers: new_answers});
  }

  render() {
    return (
        <div>
          <Questions updateValue={this.updateValue}/>
          <Recommendations college_matches={this.state.college_matches}/>
          {/* Testing */}
        </div>
    );
  }
}
