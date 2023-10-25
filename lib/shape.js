class Shape {
  constructor() {
    this.color = "white";
  }

  setColor(color) {
    if(color.startsWith('0x'))
      color = color.replace('0x', '#');

    this.color = color;
  }
};

module.exports = Shape;