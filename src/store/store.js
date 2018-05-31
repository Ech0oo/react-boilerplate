import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';

import reducer from './../reducers';

const initialState = {
    "items": ["1", "2", "3"],
    "isFetching": false
};

const store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware, logger));

export default store;