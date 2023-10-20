export class Position {
    constructor (time, coords) {
        this.time = time;
        this.coords = coords;
    }
}

export class User {
    constructor (name) {
        this._name = name;
        this._positions = [];
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

