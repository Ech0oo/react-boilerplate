import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Input from './components/Input';
import Button from './components/Button';
import List from './components/List';

import store from './store/store';
import { addTodo } from './actions/actions';

const title = 'My Minimal React Webpack Babel Setup!';

class App extends Component {
    state = store.getState();
    
    updateState = () => {
        this.setState(store.getState())
    }

    addTask = (event) => {
        event.preventDefault();
    
        const input = document.querySelector("input");
    
        store.dispatch(addTodo(input.value));
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(this.updateState);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div>
                <div>{title}</div>
                <div>
                    <Input /><Button addTodo={this.addTask}/>
                </div>
                <div>
                    <List items={this.state.items}/>
                </div>
            </div>
        )    
    }
}

export default hot(module)(App)