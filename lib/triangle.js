const Shape = require('./shape');

class Triangle extends Shape {
  render() {
    return `<polygon points=\"0, 0 100, 200 200, 0\" fill=\"${this.color}\"/>`;
  }
};

module.exports = Triangle;