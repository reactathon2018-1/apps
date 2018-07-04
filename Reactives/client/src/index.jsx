import React from 'react';
import { render } from 'react-dom';
import App from './pages/App';
import { store } from './helpers';
import { Provider } from 'react-redux';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
