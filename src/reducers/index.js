import { combineReducers } from 'redux';

import items from './tasks';
import isFetching from './request';

export default combineReducers({
    items,
    isFetching
})