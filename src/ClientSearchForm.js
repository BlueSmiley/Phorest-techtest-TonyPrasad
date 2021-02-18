import React from 'react';
import './Main.css';
import SearchField from './SearchField';


class ClientSearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterValue: '',
            searchType: 'email',
            userName: '',
            password: '',
            businessId: ''
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
                        this.state.password,
                        this.state.businessId
                    );
                }}>
                    <div className='searchFieldWrapper'>
                        <h1>Search for users by email or phone number:</h1>
                        <br className='lineBreak'/>
                        <select
                            className='spaciousWidget'
                            value={this.state.searchType}
                            onChange={this.handleSearchTypeChange}
                        >
                            <option value='email'>Email</option>
                            <option value='phone'>Phone</option>
                        </select>
                        <input
                            className='spaciousWidget'
                            type='text'
                            name='filterValue'
                            value={this.state.filterValue}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br className='lineBreak'/>

                    <div className='searchFieldWrapper'>
                        <SearchField
                            header='Username'
                            type='text'
                            name='userName'
                            value={this.state.userName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br className='lineBreak'/>

                    <div className='searchFieldWrapper'>
                        <SearchField
                            header='Password'
                            type='password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br className='lineBreak'/>

                    <div className='searchFieldWrapper'>
                        <SearchField
                            header='Business ID'
                            type='text'
                            name='businessId'
                            value={this.state.businessId}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br className='lineBreak'/>

                    <div className='searchFieldWrapper'>
                        <input type='submit' value='Search' className='spaciousWidget'/>
                    </div>
                </form>
            </div>
        );
    }
}

export default ClientSearchForm;
