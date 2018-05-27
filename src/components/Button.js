import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.addTodo}>Add todo</button>
        )
    }
}

Button.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default Button;