import React from 'react';
import PhotoCanvas from './photoCanvas';

export default class Canvas extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <PhotoCanvas users={this.props.users}></PhotoCanvas>
        )
    }
}

// show_current_positions(users)
// show_trajectory(user)

// select_point()


// highlight_selection()