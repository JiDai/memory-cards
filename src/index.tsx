import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/App/App';
import configureStore from './store'; // see store.js in the gist below

import './index.css';

const store = configureStore();

const render = (Component: React.FC) => {
    return ReactDOM.render(
        <Provider store={store}>
            <Component/>
        </Provider>,
        document.getElementById('root')
    );
};

render(App);

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./components/App/App', () => {
        const NextApp = require('./components/App/App').default;
        render(NextApp);
    });
}
