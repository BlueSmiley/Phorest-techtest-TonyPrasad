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