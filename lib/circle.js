const Shape = require('./shape');

class Circle extends Shape {
  render() {
    // SVG string for creating a circle
    return `<circle cx="100" cy="100" r="100" fill="${this.color}"/>`;
  }
};

module.exports = Circle;