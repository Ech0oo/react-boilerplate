import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
    render() {
        return (
            <li>{this.props.item}</li>
        )
    }
}

ListItem.propTypes = {
    item: PropTypes.string
}

export default ListItem;