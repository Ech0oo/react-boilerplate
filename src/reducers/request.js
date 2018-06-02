import { FETCH_TASKS, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE } from './../actions/actions';

export default function getTasks(state = false, action) {
    switch (action.type) {
        case FETCH_TASKS:
            return true;

        case FETCH_TASKS_SUCCESS:
        case FETCH_TASKS_FAILURE:
            return false;

        default:
            return state
    }
}