import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.addTodo}>Add todo</button>
        )
    }
}

export default Button;