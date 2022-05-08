const circle = {
    _radius: 1,
    _area: undefined,

    get radius() {
        return this._radius;
    },
    set radius(radius) {
        this._radius = radius;
    },
    get area() {
        return Math.PI * Math.sqrt(this._radius);
    }
};
