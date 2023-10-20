export class Position {
    constructor (time, coords) {
        this.time = time;
        this.coords = coords;
    }
}

var colors = [];
while (colors.length < 100) {
    do {
        var color = Math.floor((Math.random()*1000000)+1);
    } while (colors.indexOf(color) >= 0);
    colors.push("#" + ("000000" + color.toString(16)).slice(-6));
}

export class User {
    constructor (name) {
        this._name = name;
        this._positions = [];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    get name () {
        return this._name;
    }

    set name (name) {
        this._name = name;
    }

    add_position (position) {
        this._positions.push(position);
    }

    get positions () {
        return this._positions;
    }
}

