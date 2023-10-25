const Shape = require('./shape');

class Triangle extends Shape {
  render() {
    return `<polygon points=\"0, 200 100, 0 200, 200\" fill=\"${this.color}\"/>`;
  }
};

module.exports = Triangle;