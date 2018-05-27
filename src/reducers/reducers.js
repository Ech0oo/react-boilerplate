import { ADD_TODO } from './../actions/actions';

const initialState = {
    "items": ["1", "2", "3"]
};

export default function todoApp(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                items: [...state.items, action.text]
            })
        default:
            return state
    }
}