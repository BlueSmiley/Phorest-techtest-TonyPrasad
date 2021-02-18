
function ClientDataDisplay(props) {
    return (
        <div>
            <p>First name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Client Id: {props.clientId}</p>
            <p>Phone Number: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    );
}

export default ClientDataDisplay