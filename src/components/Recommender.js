import React, { Component } from 'react';
import Questions from './Questions.js';
import Recommendations from './Recommendations.js';
import college_data from '../colleges.json';

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
      college_matches: []
    }
    ;

    this.match_colleges = this.match_colleges.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  // add colleges listed in colleges.csv (college_data) that match question_answers to college-matches
  match_colleges() {
    // initialize empty array to store colleges matching user criteria
    let matches = [];

    // for each college in colleges.csv, check if it matches user criteria using match function
    college_data.forEach((college) => {
      if (this.match(college)) {
        // add college to matches if it matches user preferences
        matches.push(college);
      }
    });

    // update state with colleges matching user preferences
    this.setState({college_matches: matches});
  }

  match(college) {
    // reject college if user's SAT score is less than college's average by over 50 points
    if (this.state.question_answers.SAT < college.SAT - 50) {
      return false;
    } // reject college if user's GPA score is less than college's average by over 0.2 points
    else if (this.state.question_answers.GPA < college.GPA - 0.2) {
      return false;
    } // reject college if its geography, size, setting, or ownership does not match user's inputted answers
    else if (!this.state.question_answers.geography.includes(college.geography)) {
      return false;
    } else if (!this.state.question_answers.sizes.includes(college.size)) {
      return false;
    } else if (!this.state.question_answers.urbanization.includes(college.urbanization)) {
      return false;
    } else if (!this.state.question_answers.ownership.includes(college.ownership)) {
      return false;
    }

    // return true if college matches all of user's preferences
    return true;
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
          <Questions updateValue={this.updateValue} findMatches={this.match_colleges}/>
          <Recommendations college_matches={this.state.college_matches}/>
          {/* Testing */}
        </div>
    );
  }
}
