import React, { Component } from 'react';

export default class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({input : e.target.value});
    this.props.update_answers(this.state.input);
  }

  render() {
    return (
        <div>
          <h2>Questions</h2>
          <p>What is your SAT score?</p>
          <input value={this.state.input} onChange={this.handleChange}/>
        </div>
    );
  }
}
