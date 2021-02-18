import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClientSearchManager from './ClientSearchManager';
import VoucherCreationManager from './VoucherCreationManager'


ReactDOM.render(
  <React.StrictMode>
    <ClientSearchManager />
    <br/>
    <VoucherCreationManager />
  </React.StrictMode>,
  document.getElementById('root')
);

