import React, { Component } from 'react';
import Questions from './Questions.js';

export default class Recommender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question_answers: "default",
      college_matches: {}
    };

    this.match_colleges = this.match_colleges.bind(this);
    this.update_answers = this.update_answers.bind(this);
  }

  // add colleges in colleges.csv matching question_answers to college-matches
  match_colleges() {

  }

  // update question_answers based on user interactions with Questions component
  update_answers(answers) {
    this.setState({question_answers: answers});
  }

  render() {
    return (
        <div>
          <Questions update_answers={this.update_answers}/>
          <p>Your SAT score is: {this.state.question_answers}</p>
        </div>
    );
  }
}
