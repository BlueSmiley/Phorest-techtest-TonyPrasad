import React from 'react';
import ClientSearchForm from './ClientSearchForm';
import ClientDataDisplay from './ClientDataDisplay';


class ClientSearchManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSearchResults: []
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event, searchType, searchValue, userName, password) {
        event.preventDefault();
        let contactTypeString = 'an email';
        if(searchType === 'phone'){
            contactTypeString = 'a phone number'
        }
        alert('A query has been made for an user with ' + contactTypeString + ' of ' + searchValue);
        let url = 'http://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client';
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
                    this.setState({currentSearchResults: clients});
                    for (let i = 0; i < clients.length; i++) {
                        let client = clients[i];
                        // Self note: this is only for debugging, remove after
                        console.log(client.firstName);
                    }
                }
                else {
                    // Reset when no data found
                    this.setState({currentSearchResults: []});
                    console.log("No data found for those contact details");
                }
            })
            .catch((error) => {
                console.log('error:' + error);
            })
    }

    render() {
        const clientData = this.state.currentSearchResults.map((client) => {
            return (
                <ClientDataDisplay
                    key = {"Key" + client.clientId}
                    firstName={client.firstName}
                    lastName={client.lastName}
                    clientId={client.clientId}
                    phone={client.mobile}
                    email={client.email}
                />
            );
        });
        return (
            <div>
                <ClientSearchForm
                    handleSearch={this.handleSearch}
                />
                <br/>
                {clientData}
            </div>
        );
    }
}

export default ClientSearchManager