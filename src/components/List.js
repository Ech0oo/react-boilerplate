import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

class List extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map((value, index) => {
                    return <ListItem item={value} key={index} />
                })}
            </ul> 
        )
    }
}

List.propTypes = {
    items: PropTypes.array
}

export default List;