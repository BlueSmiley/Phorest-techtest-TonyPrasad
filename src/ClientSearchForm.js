import React from 'react';


class ClientSearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            searchType: 'email',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormTypeChange = this.handleFormTypeChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleFormTypeChange(event) {
        this.setState({ searchType: event.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.props.handleSearch(event, this.state.searchType, this.state.value)}>
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
            </div>
        );
    }
}

export default ClientSearchForm;
