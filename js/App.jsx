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
            ],
            selected: -1
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

    handleSelect (user_index) {
        console.log(this.state.selected, user_index);
        if (this.state.selected !== -1) {
            this.setState({
                selected: this.state.selected == user_index ? -1 : user_index
            });
        }
        else {
            this.setState({
                selected: user_index
            })
        }
        
    }

    render() {
        return (
            <div className="app-wrapper">
                <Canvas users={this.state.users} selected={this.state.selected}></Canvas>
                <Sidebar users={this.state.users} 
                    selected={this.state.selected}
                    handleNewPosition={this.handleNewPosition.bind(this)}
                    handleSelect={this.handleSelect.bind(this)}
                    ></Sidebar>
            </div>
        );
    }
}

