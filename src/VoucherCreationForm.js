import React from 'react';
import './VoucherCreationForm.css';


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
            <div className='formWrapper'>
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
                    <div className='searchFieldWrapper'>
                        <label className='searchFieldLabel'>Username:
                        <input
                                className='searchFieldInput'
                                type="text"
                                name="userName"
                                value={this.state.userName}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>

                    <div className='searchFieldWrapper'>
                        <label className='searchFieldLabel'>Password:
                        <input
                                className='searchFieldInput'
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>

                    <div className='searchFieldWrapper'>
                        <label className='searchFieldLabel'>Business Id:
                        <input
                                className='searchFieldInput'
                                type="text"
                                name="businessId"
                                value={this.state.businessId}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>

                    <div className='searchFieldWrapper'>
                        <label className='searchFieldLabel'>Client Id:
                        <input
                                className='searchFieldInput'
                                type="text"
                                name="clientId"
                                value={this.state.clientId}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>

                    <div className='searchFieldWrapper'>
                        <label className='searchFieldLabel'>Creating Branch Id:
                        <input
                                className='searchFieldInput'
                                type="text"
                                name="creatingBranchId"
                                value={this.state.creatingBranchId}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>

                    <div className='searchFieldWrapper'>
                        <label className='searchFieldLabel'>Expiry Date:
                        <input
                                className='searchFieldInput'
                                type="text"
                                name="expiryDate"
                                value={this.state.expiryDate}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>

                    <div className='searchFieldWrapper'>
                        <label className='searchFieldLabel'>Issue Date:
                        <input
                                className='searchFieldInput'
                                type="text"
                                name="issueDate"
                                value={this.state.issueDate}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>

                    <div className='searchFieldWrapper'>
                        <label className='searchFieldLabel'>Voucher Balance:
                        <input
                                className='searchFieldInput'
                                type="text"
                                name="originalBalance"
                                value={this.state.originalBalance}
                                onChange={this.handleChange}
                            />
                        </label>
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