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

        function line(x0, y0, x1, y1, color) {
            ctx.moveTo(x0, y0);
            ctx.lineTo(x1, y1);
            ctx.strokeStyle = color;
            ctx.stroke();
        }

        function show_position(position, color, position_radius=3) {
            ctx.beginPath();
            ctx.arc(position[0], position[1], position_radius, 0, 2 * Math.PI);
        
            ctx.fillStyle = color;
            ctx.strokeStyle = color;

            ctx.fill();
            ctx.stroke();
        }

        function show_trajectory(positions, color) {
            for (let i = 0; i < positions.length - 1; ++i) {
                show_position(positions[i].coords, color);
                
                let [x0, y0] = positions[i].coords;
                let [x1, y1] = positions[i + 1].coords;
                line(x0, y0, x1, y1, color);
            }
            if (positions.length > 0)
                show_position(positions[positions.length - 1].coords, color, 8);
        }

        if (this.props.selected != -1) {
            let user = this.props.users[this.props.selected];
            show_trajectory(user._positions, user.color);
        }
        else {
            for (let user of this.props.users) {
                show_trajectory(user._positions, user.color);
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