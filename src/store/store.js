import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';

import reducer from './../reducers';

const initialState = {
    "items": [{
            title: "1",
            loaded: false
        },
        {
            title: "2",
            loaded: false
        },
        {
            title: "3",
            loaded: false
        }
    ],
    "isFetching": false
};

const store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware, logger));

export default store;