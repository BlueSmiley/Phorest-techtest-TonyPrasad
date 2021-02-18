import React from 'react';
import VoucherCreationForm from './VoucherCreationForm';

class VoucherCreationManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userFeedback: ''
        }
        this.handleCreateVoucher = this.handleCreateVoucher.bind(this);
    }

    handleCreateVoucher(event, userName, password, businessId, clientId, creatingBranchId, expiryDate, issueDate, originalBalance) 
    {
        event.preventDefault();
        const url = 'http://api-gateway-dev.phorest.com/third-party-api-server/api/business/' + businessId + '/voucher';
        const requestBody = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(userName + ':' + password)
            },
            body: JSON.stringify({ 
                clientId: clientId,
                creatingBranchId: creatingBranchId,
                expiryDate: expiryDate,
                issueDate: issueDate,
                originalBalance: originalBalance
            })
        };
        this.setState({userFeedback: 'Trying to create voucher for the value of ' + originalBalance + ' for user ' +
            clientId})
        fetch(url, requestBody)
            .then((res) => {
                // better status checking later maybe
                if (!res.ok) {
                    throw new Error(res.status);
                }
                return res.json();
            })
            .then((data) => {
                this.setState({userFeedback: 'A voucher was succesfully created for user ' + data.clientId + 
                ' for a value of ' + data.originalBalance + ' valid until ' + data.expiryDate + 
                '. The total balance for this user is ' + data.remainingBalance})
            })
            .catch((error) => {
                this.setState({userFeedback : 'An error has occured:' + error});
            })
    }

    render() {
        return (
            <div>
                <VoucherCreationForm
                    handleSubmit={this.handleCreateVoucher}
                    updateClientId={this.props.updateClientId}
                    clientId={this.props.clientId}
                />
                <br />
                <p>{this.state.userFeedback}</p>
            </div>
        );
    }
}

export default VoucherCreationManager