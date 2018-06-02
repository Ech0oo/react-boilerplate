import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

class List extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map((item, index) => {
                    return <ListItem item={item.title} key={index} />
                })}
            </ul> 
        )
    }
}

List.propTypes = {
    items: PropTypes.array
}

export default List;