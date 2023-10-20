import React from 'react';
import './index.css';

export default class PhotoCanvas extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            
        };
    }



    componentDidMount () {
        let canvas = document.getElementById('canvas-map');
        let ctx = canvas.getContext('2d');

        let map_image = new Image();
        map_image.src = './dist/map.jpg';
        map_image.onload = function () {
            ctx.drawImage(map_image, 0, 0, 500, 500);
        };

        function show_position(position) {
            ctx.
        }
    }

    handleClick (event) {
        let x = event.clientX,
            y = event.clientY;
        
        
    }

    render () {
        return (
            <div className="canvas-wrapper">
                <canvas id="canvas-map" width="1000" height="1000"></canvas>
            </div>
        );
    }
}