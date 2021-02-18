import './ClientDataDisplay.css';

function ClientDataDisplay(props) {
    return (
        <div className='card'>
            <p><span className='heading'>First name:</span> {props.firstName}</p>
            <p><span className='heading'>Last Name:</span> {props.lastName}</p>
            <p><span className='heading'>Client Id:</span> {props.clientId}</p>
            <p><span className='heading'>Phone Number:</span> {props.phone}</p>
            <p><span className='heading'>Email:</span> {props.email}</p>
            <button onClick={(e) => props.onCreateVoucher(props.clientId)}> Create Voucher for this client</button>
        </div>
    );
}

export default ClientDataDisplay