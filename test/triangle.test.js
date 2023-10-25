const Triangle = require('../lib/triangle');

describe("Triangle" ,() => {
  let triangle;
  beforeEach(() => {
    triangle = new Triangle();
  });

  describe("render", () => {
    it("Should output a SVG element string with correctly set parameters", () => {
      triangle.setColor('blue');
      expect(triangle.render()).toEqual("<polygon points=\"0, 0 100, 200 200, 0\" fill=\"blue\"/>");
    });
  })
});