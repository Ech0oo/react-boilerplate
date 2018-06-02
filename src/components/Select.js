import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
    state = {
        isChecked: false,
    }

    toggleCheckboxChange = () => {
        this.state.isChecked ? this.props.removeTodoLoaded() : this.props.fetchTasks()

        this.setState({
            isChecked: !this.state.isChecked,
        });
    }

    render() {
        return (
            <div>
                <label>
                    <input type="checkbox" id="allTasks" checked={this.state.isChecked} onChange={this.toggleCheckboxChange} />
                    Show all tasks ({String(this.state.isChecked)})
                </label>
            </div>
        )
    }
}

export default Select;