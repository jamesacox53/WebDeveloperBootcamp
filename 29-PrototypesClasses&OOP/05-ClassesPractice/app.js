class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;

        this.calcHSL();
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

    calcHSL() {
		let { r, g, b } = this;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;
	}

    hsl() {
        const {h, s, l} = this;

        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    opposite() {
        const {h, s, l} = this;
        const newH = (h + 180) % 360;

        return `hsl(${newH}, ${s}%, ${l}%)`;
    }

    fullSaturation() {
        const {h, l} = this;

        return `hsl(${h}, 100%, ${l}%)`;
    }
}

const white = new Color(255, 255, 255, 'white');
const red = new Color(255, 67, 89, 'tomato');
const carrot = new Color(230, 126, 34, 'carrot');

console.log(white);
console.log(white.hsl());

console.log(red);
console.log(red.hsl());
console.log(red.opposite());

document.body.style.backgroundColor = carrot.fullSaturation();