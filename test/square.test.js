const Square = require('../lib/square');

describe("Square" ,() => {
  let square;
  beforeEach(() => {
    square = new Square();
  });

  describe("render", () => {
    it("Should output a SVG element string with correctly set parameters", () => {
      square.setColor('blue');
      expect(square.render()).toEqual("<rect x=\"0\" y=\"0\" width=\"200\" height=\"200\" fill=\"blue\"/>")
    });
  })
});