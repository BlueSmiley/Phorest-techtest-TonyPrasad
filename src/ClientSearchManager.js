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

    handleSearch(event, searchType, searchValue) {
        event.preventDefault();
        alert('A ' + searchType + ' query was submitted: ' + searchValue);
        let url = 'http://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client';
        let query = '?' + searchType + '=' + searchValue;
        fetch(url + query, {
            headers: {
                'Authorization': 'Basic ' + btoa('global/cloud@apiexamples.com:VMlRo/eh+Xd8M~l'),
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
                    console.log("No data found");
                    console.log(data);
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
                {clientData}
            </div>
        );
    }
}

export default ClientSearchManager