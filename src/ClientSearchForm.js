import React from 'react';


class ClientSearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterValue: '',
            searchType: 'email',
            userName: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSearchTypeChange(event) {
        this.setState({ searchType: event.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => {
                    this.props.handleSearch(
                        event,
                        this.state.searchType,
                        this.state.filterValue,
                        this.state.userName,
                        this.state.password
                    );
                }}>
                    <label>
                        Search by email or phone number:
                        <br />
                        <select value={this.state.searchType} onChange={this.handleSearchTypeChange}>
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                        </select>
                        <input type="text" name="filterValue" value={this.state.filterValue} onChange={this.handleChange} />
                    </label>

                    <label>
                        Username:
                        <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:
                        <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <br />
                    <input type="submit" value="Search" />
                </form>
            </div>
        );
    }
}

export default ClientSearchForm;
