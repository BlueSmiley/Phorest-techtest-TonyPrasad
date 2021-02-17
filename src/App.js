import React from 'react';


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: '',
      searchType: 'email',
      testVal: 'test'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormTypeChange = this.handleFormTypeChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert('A ' + this.state.searchType + ' was submitted: ' + this.state.value);
    let url = 'http://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client?email=techtest@phorest.com'
    let query  = '?' + this.searchType + '=' + this.value
    fetch(url + query, {
      headers: {
        'Authorization': 'Basic ' + btoa('global/cloud@apiexamples.com:VMlRo/eh+Xd8M~l'),
      }
    })
    .then(res => res.json())
    .then((data) => { console.log(data)} )
    .catch(console.log)
    event.preventDefault();
  }

  handleFormTypeChange(event) {
    this.setState({ searchType: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search by email or phone number:
          <br />
            <select value={this.state.searchType} onChange={this.handleFormTypeChange}>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Search" />
        </form>
        <div>{this.state.testVal}</div>
      </div>
    );
  }
}

export default NameForm;
