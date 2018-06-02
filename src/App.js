import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import Input from './components/Input';
import Button from './components/Button';
import List from './components/List';
import Select from './components/Select';

import { addTodo, fetchTasks, removeTodoLoaded } from './actions/actions';

const title = 'My Minimal React Webpack Babel Setup!';

class App extends Component {
    addTask = (event) => {
        event.preventDefault();
    
        const input = document.querySelector("input");
    
        this.props.createTodo(input.value);
    }

    render() {
        return (
            <div>
                <div>{title}</div>
                <div>
                    <Input /><Button addTodo={this.addTask} />
                </div>
                <div>
                    <Select fetchTasks={this.props.fetchTodos} removeTodoLoaded={this.props.removeTodoLoaded} />
                </div>
                <div>
                    <List items={this.props.items} />
                </div>
            </div>
        )    
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTodo: (text) => dispatch(addTodo(text)),
        fetchTodos: () => dispatch(fetchTasks()),
        removeTodoLoaded: () => dispatch(removeTodoLoaded())
    }
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default hot(module)(App)