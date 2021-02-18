import React from 'react';
import './VoucherCreationForm.css';
import SearchField from './SearchField';

class VoucherCreationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            businessId: '',
            creatingBranchId: '',
            expiryDate: '',
            issueDate: '',
            originalBalance: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if (event.target.name === 'clientId')
        {
            this.props.updateClientId(event.target.value);
        }
        else
        {
            this.setState({ [event.target.name]: event.target.value });
        }
    }

    render() {
        return (
            <div className='formWrapper'>
                <form
                    onSubmit={
                        (event) => {
                            this.props.handleSubmit(
                                event,
                                this.state.userName,
                                this.state.password,
                                this.state.businessId,
                                this.props.clientId,
                                this.state.creatingBranchId,
                                this.state.expiryDate,
                                this.state.issueDate,
                                this.state.originalBalance
                            )
                        }
                    }
                >
                    <h1>Create a voucher for a user:</h1>
                    <br />
                    <div className='searchFieldWrapper'>
                        <SearchField
                            header="Username"
                            type="text"
                            name="userName"
                            value={this.state.userName}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className='searchFieldWrapper'>
                        <SearchField
                            header="Password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className='searchFieldWrapper'>
                        <SearchField
                            header="Business Id"
                            type="text"
                            name="businessId"
                            value={this.state.businessId}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className='searchFieldWrapper'>
                        <SearchField
                            header="Client Id"
                            type="text"
                            name="clientId"
                            value={this.props.clientId}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className='searchFieldWrapper'>
                        <SearchField
                            header="Branch Id"
                            type="text"
                            name="creatingBranchId"
                            value={this.state.creatingBranchId}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className='searchFieldWrapper'>
                        <SearchField
                            header="Expiry Date"
                            type="text"
                            name="expiryDate"
                            value={this.state.expiryDate}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className='searchFieldWrapper'>
                        <SearchField
                            header="Issue Date"
                            type="text"
                            name="issueDate"
                            value={this.state.issueDate}
                            onChange={this.handleChange}
                        />

                    </div>

                    <div className='searchFieldWrapper'>
                        <SearchField
                            header="Voucher Balance"
                            type="text"
                            name="originalBalance"
                            value={this.state.originalBalance}
                            onChange={this.handleChange}
                        />
                    </div>

                    <br />
                    <div className='searchFieldWrapper'>
                        <input type="submit" value="Create Voucher" />
                    </div>
                </form>
            </div>
        );
    }
}

export default VoucherCreationForm;