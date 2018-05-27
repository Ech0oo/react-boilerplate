import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import Input from './components/Input';
import Button from './components/Button';
import List from './components/List';

import { addTodo } from './actions/actions';

const title = 'My Minimal React Webpack Babel Setup!';

class App extends Component {
    addTask = (event) => {
        event.preventDefault();
    
        const input = document.querySelector("input");
    
        this.props.dispatch(addTodo(input.value));
    }

    render() {
        return (
            <div>
                <div>{title}</div>
                <div>
                    <Input /><Button addTodo={this.addTask}/>
                </div>
                <div>
                    <List items={this.props.items}/>
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

App = connect(mapStateToProps)(App);

export default hot(module)(App)