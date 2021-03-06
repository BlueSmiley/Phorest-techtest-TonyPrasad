import React from 'react';
import ClientSearchForm from './ClientSearchForm';
import ClientDataDisplay from './ClientDataDisplay';
import './Main.css';


class ClientSearchManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSearchResults: [],
            userFeedback: ''
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event, searchType, searchValue, userName, password, businessId) {
        event.preventDefault();
        let contactTypeString = 'an email';
        if(searchType === 'phone'){
            contactTypeString = 'a phone number'
        }
        // While query loading also sensible default
        this.setState({userFeedback : 'A query has been made for an user with ' + contactTypeString + ' of ' + searchValue});

        let url = 'http://api-gateway-dev.phorest.com/third-party-api-server/api/business/' + businessId + '/client';
        let query = '?' + searchType + '=' + searchValue;
        fetch(url + query, {
            headers: {
                'Authorization': 'Basic ' + btoa(userName + ':' + password),
            }
        })
            .then((res) => {
                // better status checking later maybe
                if (!res.ok) {
                    throw new Error(res.status);
                }
                return res.json();
            })
            .then((data) => {
                if (data.page.totalElements > 0) {
                    let clients = data['_embedded']['clients']
                    this.setState({
                        currentSearchResults: clients,
                        userFeedback: 'Found ' + clients.length + ' results for user with ' + contactTypeString + 
                        ' of ' + searchValue
                    });
                    
                }
                else {
                    // Reset when no data found
                    this.setState({
                        currentSearchResults: [],
                        userFeedback : 'No data found for user with ' + contactTypeString + ' of ' + searchValue
                    });

                }
            })
            .catch((error) => {
                this.setState({userFeedback : 'An error has occured:' + error});
            })
    }

    render() {
        const clientData = this.state.currentSearchResults.map((client) => {
            return (
                <ClientDataDisplay
                    key = {'Key' + client.clientId}
                    firstName={client.firstName}
                    lastName={client.lastName}
                    clientId={client.clientId}
                    phone={client.mobile}
                    email={client.email}
                    onCreateVoucher={this.props.updateClientId}
                />
            );
        });
        return (
            <div>
                <ClientSearchForm
                    handleSearch={this.handleSearch}
                />
                <br className='lineBreak'/>
                <p>{this.state.userFeedback}</p>
                <br className='lineBreak'/>
                {clientData}
            </div>
        );
    }
}

export default ClientSearchManager