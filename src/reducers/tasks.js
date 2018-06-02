import { ADD_TODO, ADD_TODO_ARR, REMOVE_TODO_LOADED } from './../actions/actions';

export default function addtask(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {title: action.text, loaded: false}]

        case ADD_TODO_ARR:
            const totdoArr = action.arr.slice(0, 10).map((oTask) => {
                return {
                    title: oTask.title,
                    loaded: true
                }
            });
            return [...state, ...totdoArr]

        case REMOVE_TODO_LOADED:
            return state.filter(task => !task.loaded);
            
        default:
            return state
    }
}