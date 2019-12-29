import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import * as reducers from './reducers'; // aka this is your rootReducer


const configureStore = () => {
    const root = combineReducers({...reducers});
    const store = createStore(root, composeWithDevTools());

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(root);
        });
    }

    return store;
};

export default configureStore;
