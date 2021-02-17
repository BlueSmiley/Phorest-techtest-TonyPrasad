import React from 'react';
import VoucherCreationForm from './VoucherCreationForm';

class VoucherCreationManager extends React.Component {

    constructor(props) {
        super(props);
        this.handleCreateVoucher = this.handleCreateVoucher.bind(this);
    }

    handleCreateVoucher(event, businessId, clientId, creatingBranchId, expiryDate, issueDate, originalBalance) 
    {
        event.preventDefault();
        const url = 'http://api-gateway-dev.phorest.com/third-party-api-server/api/business/' + businessId + '/voucher';
        const requestBody = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('global/cloud@apiexamples.com:VMlRo/eh+Xd8M~l')
            },
            body: JSON.stringify({ 
                clientId: clientId,
                creatingBranchId: creatingBranchId,
                expiryDate: expiryDate,
                issueDate: issueDate,
                originalBalance: originalBalance
            })
        };
        fetch(url, requestBody)
            .then((res) => {
                // better status checking later maybe
                if (!res.ok) {
                    throw new Error(res.status);
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log('error:' + error);
            })
        console.log("Business Id:" + businessId + " Client Id:" + clientId + " Branch Id:" + creatingBranchId +
            " Expiry date:" + expiryDate + " Issue Date:" + issueDate + " Original Balance:" + originalBalance)
    }

    render() {
        return (
            <VoucherCreationForm
                handleSubmit={this.handleCreateVoucher}
            />
        );
    }
}

export default VoucherCreationManager