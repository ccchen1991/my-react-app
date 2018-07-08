import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppStore from './store';
import AppRoutes from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store = { AppStore } >
        <AppRoutes />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
