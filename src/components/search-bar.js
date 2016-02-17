import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      query: ''
    };
  }
  onInputChange(event) {
    this.setState({
      query: event.target.value
    });
    this.props.onSearch(event.target.value);
  }
  render() {
    return (
      <div className='row'>
        <div className='col-xs-12 col-sm-8 form-group'>
          <br/>
          <input className='form-control'
            value={this.state.query}
            onChange={this.onInputChange} />
        </div>
      </div>
    );
  }
}

export default SearchBar;