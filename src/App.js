import ClientSearchManager from './ClientSearchManager';
import VoucherCreationManager from './VoucherCreationManager';
import React from 'react';
import './App.css';
import './Main.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientId: ''
        };
        this.updateClientId = this.updateClientId.bind(this);
    }

    updateClientId(newClientId){ 
        this.setState({clientId : newClientId});
    }

    render() {
        return (
            <div>
                <ClientSearchManager 
                    updateClientId={this.updateClientId}
                />
                <br className='lineBreak'/>
                <VoucherCreationManager 
                    updateClientId={this.updateClientId}
                    clientId={this.state.clientId}
                />
            </div>
        );
    }

}

export default App
