import fetch from 'cross-fetch';

export const ADD_TODO = 'ADD_TODO';
export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASKS_SUCCESS= 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE= 'FETCH_TASKS_FAILURE';

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text: text
    }
}

export function requestTasks() {
    return {
        type: FETCH_TASKS
    }
}

export function handleSuccessRequest(json) {
    return {
        type: FETCH_TASKS_SUCCESS,
        tasks: json.data.children.map((child) => {child.data})
    }
}

export function handleFailureRequest(error) {
    return {
        type: FETCH_TASKS_FAILURE,
        error
    }
}

export function fetchTasks() {
    return (dispatch) => {
        dispatch(requestTasks());

        return fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => response.json())
            .then((json) => dispatch(handleSuccessRequest(json)))
            .catch((error) => dispatch(handleFailureRequest(error)));
    }
}