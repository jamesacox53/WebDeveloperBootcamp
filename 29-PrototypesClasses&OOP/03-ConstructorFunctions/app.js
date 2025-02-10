const arr = new Array();
arr.push('1');

console.log(arr);

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
};

Color.prototype.hex = function() {
    const hex = (1 << 24) + (this.r << 16) + (this.g << 8) + this.b;

    return '#' + hex.toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1.0) {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${a})`;
};

const color1 = new Color(255, 40, 100);
console.log(color1);

console.log(color1.rgb());
console.log(color1.hex());
console.log(color1.rgba(0.5));

const color2 = new Color(0, 0, 0);
console.log(color2);

console.log(color2.rgb());
console.log(color2.hex());
console.log(color2.rgba(0.2));

console.log(color1.hex === color2.hex);