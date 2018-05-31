import { ADD_TODO } from './../actions/actions';

export default function addtask(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.text]
        default:
            return state
    }
}