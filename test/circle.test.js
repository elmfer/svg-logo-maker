const Circle = require('../lib/circle');

describe("Circle" ,() => {
  let circle;
  beforeEach(() => {
    circle = new Circle();
  });

  describe("render", () => {
    it("Should output a SVG element string with correctly set parameters", () => {
      circle.setColor('blue');
      expect(circle.render()).toEqual("<circle cx=\"100\" cy=\"100\" r=\"100\" fill=\"blue\"/>")
    });
  })
});