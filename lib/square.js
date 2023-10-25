const Shape = require('./shape');

class Square extends Shape {
  render() {
    return `<rect x=\"0\" y=\"0\" width=\"200\" height=\"200\" fill=\"${this.color}\"/>`;
  }
}

module.exports = Square;