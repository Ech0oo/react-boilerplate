import fetch from 'cross-fetch';

export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_ARR = 'ADD_TODO_ARR';
export const REMOVE_TODO_LOADED = 'REMOVE_TODO_LOADED';
export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASKS_SUCCESS= 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE= 'FETCH_TASKS_FAILURE';

export function addTodo(title) {
    return {
        type: ADD_TODO,
        text: title
    }
}

export function addTodoArr(todoArr) {
    return {
        type: ADD_TODO_ARR,
        arr: todoArr
    }
}

export function removeTodoLoaded() {
    return {
        type: REMOVE_TODO_LOADED
    }
}

export function requestTasks() {
    return {
        type: FETCH_TASKS
    }
}

export function handleSuccessRequest(data) {
    return {
        type: FETCH_TASKS_SUCCESS,
        tasks: data
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
            .then((data) => {
                dispatch(addTodoArr(data))
                dispatch(handleSuccessRequest());
            })
            .catch((error) => dispatch(handleFailureRequest(error)));
    }
}