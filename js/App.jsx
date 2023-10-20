import React from 'react';

import Canvas from './components/canvas';
import Sidebar from './components/sidebar';
import * as common from './common.js';
import './index.css';

export default class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            users: [
                new common.User('Artem'),
                new common.User('Kirill')
            ]
        };
    }

    handleAddingNewUser (user) {
        this.setState({
            users: [...this.state.users, user]
        });
    }

    handleNewPosition (user_index, x, y, time) {
        this.setState({
            users: this.state.users.map((a, i) => {
                if (i == user_index) a.add_position(new common.Position(time, [x, y]));
                return a;
            })
        });
    }

    render() {
        return (
            <div className="app-wrapper">
                <Canvas users={this.state.users}></Canvas>
                <Sidebar users={this.state.users} handleNewPosition={this.handleNewPosition.bind(this)}></Sidebar>
            </div>
        );
    }
}

