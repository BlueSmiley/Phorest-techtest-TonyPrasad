import React from 'react';
import './ClientSearchForm.css';


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
            <div className='formWrapper'>
                <form onSubmit={(event) => {
                    this.props.handleSearch(
                        event,
                        this.state.searchType,
                        this.state.filterValue,
                        this.state.userName,
                        this.state.password
                    );
                }}>
                    <div className='searchFieldWrapper'>
                        Search by email or phone number:
                        <br/>
                        <select value={this.state.searchType} onChange={this.handleSearchTypeChange}>
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                        </select>
                        <input type="text" name="filterValue" value={this.state.filterValue} onChange={this.handleChange} />
                    </div>
                    <br/>

                    <div className='searchFieldWrapper'>
                        <label className='searchFieldLabel'>
                            Username:
                        <input
                                className='searchFieldInput'
                                type="text"
                                name="userName"
                                value={this.state.userName}
                                onChange={this.handleChange} />
                        </label>
                    </div>
                    <br/>

                    <div className='searchFieldWrapper'>
                        <label className='searchFieldLabel'>
                            Password:
                        <input
                                className='searchFieldInput'
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange} />
                        </label>
                    </div>
                    <br/>

                    <div className='searchFieldWrapper'>
                        <input type="submit" value="Search" />
                    </div>
                </form>
            </div>
        );
    }
}

export default ClientSearchForm;
