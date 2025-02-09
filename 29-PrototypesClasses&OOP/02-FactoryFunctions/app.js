function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}

console.log(hex(255, 100, 25));
// rgb(255, 100, 25)
// #ff6419

function makeColor(r, g, b) {
    const colorObj = {
        r: r,
        g: g,
        b: b,

        rgb: function() {
            return `rgb(${this.r}, ${this.g}, ${this.b})`;
        },

        hex: function() {
            const hex = (1 << 24) + (this.r << 16) + (this.g << 8) + this.b;

            return '#' + hex.toString(16).slice(1);
        }
    };

    return colorObj;
}

const firstColorObj = makeColor(35, 255, 150);
console.log(firstColorObj.rgb());
console.log(firstColorObj.hex());

