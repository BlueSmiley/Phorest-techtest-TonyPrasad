import React from 'react';


class VoucherCreationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
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
                                this.state.userName,
                                this.state.password,
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
                    Create a voucher:
                    <br />
                    <label>Username:
                        <input
                            type="text"
                            name="userName"
                            value={this.state.userName}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>Password:
                        <input
                            type="text"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>Business Id:
                        <input
                            type="text"
                            name="businessId"
                            value={this.state.businessId}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>Client Id:
                        <input
                            type="text"
                            name="clientId"
                            value={this.state.clientId}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>Creating Branch Id:
                        <input
                            type="text"
                            name="creatingBranchId"
                            value={this.state.creatingBranchId}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>Expiry Date:
                        <input
                            type="text"
                            name="expiryDate"
                            value={this.state.expiryDate}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>Issue Date:
                        <input
                            type="text"
                            name="issueDate"
                            value={this.state.issueDate}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>Original balance:
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