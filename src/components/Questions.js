import React, {Component} from 'react';

export default class Questions extends Component {
  constructor(props) {
    super(props);

    // initialize state with list of variables controlling user input for each question
    this.state = {
      "SAT": "",
      "GPA": "",
      "geography": [],
      "sizes": [],
      "urbanization": [],
      "ownership": []
    };

    this.handleSATChange = this.handleSATChange.bind(this);
    this.handleGPAChange = this.handleGPAChange.bind(this);
    this.handleGeographyChange = this.handleGeographyChange.bind(this);
    this.handleSizesChange = this.handleSizesChange.bind(this);
    this.handleUrbanizationChange = this.handleUrbanizationChange.bind(this);
    this.handleOwnershipChange = this.handleOwnershipChange.bind(this);
    this.handleFindMatches = this.handleFindMatches.bind(this);
  }

  /* functions to handle user input by updating local and parent state for corresponding question */
  handleSATChange(e) {
    this.setState({"SAT" : e.target.value});
    this.props.updateValue("SAT", e.target.value);
  }

  handleGPAChange(e) {
    this.setState({"GPA" : e.target.value});
    this.props.updateValue("GPA", e.target.value);
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

    this.setState({"geography": new_geography})
    this.props.updateValue("geography", new_geography);
  }

  handleSizesChange(e) {
    // create new list to replace old school sizes
    let new_sizes = this.state.sizes;
    // if checked, add school size to old list
    if (e.target.checked) {
      new_sizes.push(e.target.id);
    } else { // if unchecked, remove size from old list
      new_sizes.splice(this.state.sizes.indexOf(e.target.id), 1);
    }

    this.setState({"sizes": new_sizes})
    this.props.updateValue("sizes", new_sizes);
  }

  handleUrbanizationChange(e) {
    // create new list to replace old settings
    let new_urbanization = this.state.urbanization;
    // if checked, add setting to old list
    if (e.target.checked) {
      new_urbanization.push(e.target.id);
    } else { // if unchecked, remove setting from old list
      new_urbanization.splice(this.state.urbanization.indexOf(e.target.id), 1);
    }

    this.setState({"urbanization": new_urbanization})
    this.props.updateValue("urbanization", new_urbanization);
  }

  handleOwnershipChange(e) {
    // create new list to replace old school types
    let new_ownership = this.state.ownership;
    // if checked, add school type to old list
    if (e.target.checked) {
      new_ownership.push(e.target.id);
    } else { // if unchecked, remove school type from old list
      new_ownership.splice(this.state.ownership.indexOf(e.target.id), 1);
    }

    this.setState({"ownership": new_ownership})
    this.props.updateValue("ownership", new_ownership);
  }

  handleFindMatches(e) {
    e.preventDefault();
    this.props.findMatches();
  }

  render() {
    return (
        <div>
          <h2>Questions</h2>
          <form>
            {/* SAT score question */}
            <label htmlFor="SAT">What is your SAT score?</label><br/>
            <input type="text" name="SAT" id="SAT" value={this.state.SAT} onChange={this.handleSATChange}/><br/>
            {/* GPA question */}
            <label htmlFor="GPA">What is your GPA?</label><br/>
            <input type="text" name="GPA" id="GPA" value={this.state.GPA} onChange={this.handleGPAChange}/><br/>
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
            {/* sizes question */}
            <p>Which sizes of schools do you prefer?</p>
            <input type="checkbox" name="sizes" id="small" onChange={this.handleSizesChange}/>
            <label htmlFor="small">Small</label><br/>
            <input type="checkbox" name="sizes" id="medium" onChange={this.handleSizesChange}/>
            <label htmlFor="medium">Medium</label><br/>
            <input type="checkbox" name="sizes" id="large" onChange={this.handleSizesChange}/>
            <label htmlFor="large">Large</label><br/>
            {/* urbanization question */}
            <p>What type of setting do you want to attend college in?</p>
            <input type="checkbox" name="urbanization" id="rural" onChange={this.handleUrbanizationChange}/>
            <label htmlFor="rural">Rural</label><br/>
            <input type="checkbox" name="urbanization" id="suburban" onChange={this.handleUrbanizationChange}/>
            <label htmlFor="suburban">Suburban</label><br/>
            <input type="checkbox" name="urbanization" id="urban" onChange={this.handleUrbanizationChange}/>
            <label htmlFor="urban">Urban</label><br/>
            {/* ownership question */}
            <p>Would you rather attend a public or private school, or both?</p>
            <input type="checkbox" name="ownership" id="public" onChange={this.handleOwnershipChange}/>
            <label htmlFor="public">Public</label><br/>
            <input type="checkbox" name="ownership" id="private" onChange={this.handleOwnershipChange}/>
            <label htmlFor="private">Private</label><br/>
            {/* button to find matches */}
            <button id="match_button" onClick={this.handleFindMatches}>Find Matches</button>
          </form>
        </div>
    );
  }
}
