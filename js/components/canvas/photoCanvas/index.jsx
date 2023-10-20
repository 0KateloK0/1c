import React from 'react';
import './index.css';

export default class PhotoCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef(null);
        this.state = {
            
        }
    }

    redraw() {
        let canvas = this.canvasRef.current;
        let ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        function show_position(position, color) {
            let position_radius = 5;
            ctx.beginPath();
            ctx.arc(position[0], position[1], position_radius, 0, 2 * Math.PI);
        
            ctx.fillStyle = color;
            ctx.strokeStyle = color;

            ctx.fill();
            ctx.stroke();
        }

        if (this.props.selected != -1) {
            for (let pos of this.props.users[this.props.selected]._positions) {
                show_position(pos.coords, this.props.users[this.props.selected].color);
            }
        }
        else {
            for (let user of this.props.users) {
                for (let pos of user._positions) {
                    show_position(pos.coords, user.color);
                }
            }
        }
    }
    componentDidMount () {
        this.redraw();
    }

    componentDidUpdate() {
        this.redraw();
    }

    render() {
        return (
            <div className="canvas-wrapper">
                <canvas id="canvas-map" width="500" height="500" ref={this.canvasRef}></canvas>
            </div>
        );
    }
}