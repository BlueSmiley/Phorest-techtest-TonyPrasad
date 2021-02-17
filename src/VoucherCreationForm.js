import React from 'react';


class VoucherCreationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businessId: '',
            clientId: '',
            creatingBranchId: '',
            expiryDate: '',
            issueDate: '',
            originalBalance: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={
                        (event) => {
                            this.props.handleSubmit(
                                event,
                                this.state.businessId,
                                this.state.clientId,
                                this.state.creatingBranchId,
                                this.state.expiryDate,
                                this.state.issueDate,
                                this.state.originalBalance
                            )
                        }
                    }
                >
                    <label>
                        Create a voucher:
                        <br />

                        <span>Business Id:</span>
                        <input
                            type="text"
                            name="businessId"
                            value={this.state.businessId}
                            onChange={this.handleChange}
                        />

                        <span>Client Id:</span>
                        <input
                            type="text"
                            name="clientId"
                            value={this.state.clientId}
                            onChange={this.handleChange}
                        />

                        <span>Creating Branch Id:</span>
                        <input
                            type="text"
                            name="creatingBranchId"
                            value={this.state.creatingBranchId}
                            onChange={this.handleChange}
                        />

                        <span>Expiry Date:</span>
                        <input
                            type="text"
                            name="expiryDate"
                            value={this.state.expiryDate}
                            onChange={this.handleChange}
                        />

                        <span>Issue Date:</span>
                        <input
                            type="text"
                            name="issueDate"
                            value={this.state.issueDate}
                            onChange={this.handleChange}
                        />

                        <span>Original balance:</span>
                        <input
                            type="text"
                            name="originalBalance"
                            value={this.state.originalBalance}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <input type="submit" value="Create Voucher" />
                </form>
            </div>
        );
    }
}

export default VoucherCreationForm;