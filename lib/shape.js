class Shape {
  constructor() {
    this.color = "white";
  }

  // A function shared among all shapes that sets its fill color
  setColor(color) {
    if(color.startsWith('0x'))
      color = color.replace('0x', '#');

    this.color = color;
  }
};

module.exports = Shape;