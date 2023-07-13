import React, { Component } from 'react';
import Questions from './Questions.js';

export default class Recommender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question_answers: {
        "SAT": null,
        "GPA": null,
        "geography": [],
        "size": null,
        "urbanization": null,
        "type": null
      },
      college_matches: {}
    };

    this.match_colleges = this.match_colleges.bind(this);
    this.updateSAT = this.updateSAT.bind(this);
    this.updateGPA = this.updateGPA.bind(this);
    this.updateGeography = this.updateGeography.bind(this);
  }

  // add colleges listed in colleges.csv that match question_answers to college-matches
  match_colleges() {

  }

  // update question_answers based on user interactions with Questions component
  updateSAT(score) {
    let new_answers = this.state.question_answers;
    new_answers["SAT"] = score;
    this.setState({question_answers: new_answers});
  }

  updateGPA(gpa) {
    let new_answers = this.state.question_answers;
    new_answers["GPA"] = gpa;
    this.setState({question_answers: new_answers});
  }

  // takes list of string representing geographic regions as input
  updateGeography(regions) {
    let new_answers = this.state.question_answers;
    new_answers["geography"] = regions;
    this.setState({question_answers: new_answers});
  }

  render() {
    return (
        <div>
          <Questions updateSAT={this.updateSAT} updateGPA={this.updateGPA} updateGeography={this.updateGeography}/>
          {/* Testing */}
          <p>Your SAT score is: {this.state.question_answers.SAT}</p>
          <p>Your GPA is: {this.state.question_answers.GPA}</p>
          <p>Your preferred geographic regions are:</p>
          {this.state.question_answers.geography.map((region, index) => (<p key={index}>{region}</p>))}

        </div>
    );
  }
}
