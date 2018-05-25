import React, { Component } from 'react';

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

export default List;