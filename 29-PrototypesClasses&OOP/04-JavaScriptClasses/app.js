class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    greet() {
        return `Hello from ${this.name}!`;
    }

    rgb() {
        return `rgb(${this._innerRGB()})`;
    }

    _innerRGB() {
        return `${this.r}, ${this.g}, ${this.b}`;
    }

    hex() {
        const hex = (1 << 24) + (this.r << 16) + (this.g << 8) + this.b;
    
        return '#' + hex.toString(16).slice(1);
    }

    rgba(a = 1.0) {
        return `rgba(${this._innerRGB()}, ${a})`;
    }
}

const c1 = new Color(255, 67, 89, 'tomato');

console.log(c1);
console.log(c1.greet());
console.log(c1.rgb());
console.log(c1.hex());
console.log(c1.rgba(0.4));