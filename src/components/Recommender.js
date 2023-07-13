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
  // key is question and value is answer from user input
  updateValue(key, value) {
    let new_answers = this.state.question_answers;
    new_answers[key] = value;
    this.setState({question_answers: new_answers});
  }

  render() {
    return (
        <div>
          <Questions updateValue={this.updateValue}/>
          {/* Testing */}
          <p>Your SAT score is: {this.state.question_answers.SAT}</p>
          <p>Your GPA is: {this.state.question_answers.GPA}</p>
          <p>Your preferred geographic regions are:</p>
          {this.state.question_answers.geography.map((region, index) => (<p key={index}>{region}</p>))}
          <p>Your preferred college sizes are:</p>
          {this.state.question_answers.sizes.map((size, index) => (<p key={index}>{size}</p>))}
          <p>Your preferred college settings are:</p>
          {this.state.question_answers.urbanization.map((setting, index) => (<p key={index}>{setting}</p>))}
          <p>Your preferred type(s) of schools are:</p>
          {this.state.question_answers.ownership.map((type, index) => (<p key={index}>{type}</p>))}
        </div>
    );
  }
}
