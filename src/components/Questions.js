import React, {Component, useState} from 'react';

export default class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "SAT": "",
      "GPA": "",
      "geography": []
    };

    this.handleSATChange = this.handleSATChange.bind(this);
    this.handleGPAChange = this.handleGPAChange.bind(this);
    this.handleGeographyChange = this.handleGeographyChange.bind(this);
  }

  handleSATChange(e) {
    this.setState({"SAT" : e.target.value});
    this.props.updateSAT(e.target.value);
  }

  handleGPAChange(e) {
    this.setState({"GPA" : e.target.value});
    this.props.updateGPA(e.target.value);
  }

  handleGeographyChange(e) {
    // create new list to replace old geographic regions
    let new_geography = this.state.geography;
    // if checked, add geographic region to old list
    if (e.target.checked) {
      new_geography.push(e.target.id);
    } else { // if unchecked, remove geographic region from old list
      new_geography.splice(this.state.geography.indexOf(e.target.id), 1);
    }

    console.log(new_geography);
    this.setState({"geography": new_geography})
    this.props.updateGeography(new_geography);
  }

  render() {
    return (
        <div>
          <h2>Questions</h2>
          <form>
            {/* SAT score question */}
            <label htmlFor="SAT">What is your SAT score?</label><br/>
            <input name="SAT" id="SAT" value={this.state.SAT} onChange={this.handleSATChange}/><br/>
            {/* GPA question */}
            <label htmlFor="GPA">What is your GPA?</label><br/>
            <input name="GPA" id="GPA" value={this.state.GPA} onChange={this.handleGPAChange}/><br/>
            {/* geography question */}
            <p>Which geographic regions do you prefer?</p>
            <input type="checkbox" name="geography" id="northeast" onChange={this.handleGeographyChange}/>
            <label htmlFor="northeast">Northeast</label><br/>
            <input type="checkbox" name="geography" id="midwest" onChange={this.handleGeographyChange}/>
            <label htmlFor="midwest">Midwest</label><br/>
            <input type="checkbox" name="geography" id="south" onChange={this.handleGeographyChange}/>
            <label htmlFor="south">South</label><br/>
            <input type="checkbox" name="geography" id="west" onChange={this.handleGeographyChange}/>
            <label htmlFor="west">West</label><br/>
          </form>
        </div>
    );
  }
}
