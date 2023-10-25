const Shape = require('./shape');

class Triangle extends Shape {
  render() {
    // An SVG string that generates a triangle using a polygon
    return `<polygon points=\"0, 200 100, 0 200, 200\" fill=\"${this.color}\"/>`;
  }
};

module.exports = Triangle;