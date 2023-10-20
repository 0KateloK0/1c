import React from 'react';
import PhotoCanvas from './photoCanvas';

export default class Canvas extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <PhotoCanvas users={this.props.users} selected={this.props.selected}></PhotoCanvas>
        )
    }
}