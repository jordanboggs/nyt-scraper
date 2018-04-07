import React, { Component } from 'react';
import API from '../../utils/API';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicName: "",
      startYear: "",
      endYear  : "",
      results  : []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange = (event) => {
    // Update appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    let topicName = this.state.topicName;
    let startYear = this.state.startYear;
    let endYear   = this.state.endYear;

    // NYT API search, push results to this.state.results
    API.searchForArticles(topicName, startYear, endYear)
      .then((res) => {
        this.setState({ results : res.data.response.docs });
        
        // Return this.state.results to parent
        this.props.searchArticles(this.state.results);
      });
  }

  render() {
    return (
      <div className="search-form col-sm offset-lg-2 col-lg-8 p-0 mt-2 mb-2 bg-light">
        <h2 className="bg-primary text-white p-1">Search</h2>
        <form>
          <div className="form-group ml-1 mr-1">
            <label htmlFor="topic">Topic</label>
            <input type="text" 
                   className="form-control" 
                   name="topicName" 
                   value={this.state.topicName}
                   onChange={this.handleInputChange}
                   placeholder="Enter search term" />
          </div>
          <div className="form-group ml-1 mr-1">
            <label htmlFor="start-year">Start Year</label>
            <input type="text" 
                   className="form-control" 
                   name="startYear" 
                   value={this.state.startYear}
                   onChange={this.handleInputChange}
                   placeholder="Enter start year for search" />
          </div>
          <div className="form-group ml-1 mr-1">
            <label htmlFor="end-year">End Year</label>
            <input type="text" 
                   className="form-control" 
                   name="endYear" 
                   value={this.state.endYear}
                   onChange={this.handleInputChange}
                   placeholder="Enter end year for search" />
          </div>
          <button type="submit" 
                  className="btn btn-primary ml-1 mr-1 mb-1"
                  onClick={this.handleFormSubmit}
                  >Submit</button>
        </form>
      </div>
    )
  }
}

export default SearchForm;
