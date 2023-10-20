import React from 'react';
import './index.css';

// поскольку изображение рисуется на канвасе и необходимо чтобы канвас был создан до того как на нем что-то будет изменяться,
// канвас должен быть создан раньше этого объекта. 

// class Canvas extends React.Component {
//     constructor (props) {

//     }

//     render () {

//     }
// }

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

        let self = this;

        for (let user of self.props.users) {
            for (let pos of user._positions) {
                let position_radius = 5;
    
                ctx.beginPath();
                ctx.arc(pos.coords[0], pos.coords[1], position_radius, 0, 2 * Math.PI);
                ctx.fillStyle = 'red';
                ctx.strokeStyle = 'red';
                ctx.fill();
                ctx.stroke();
            }
        }
        // };

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