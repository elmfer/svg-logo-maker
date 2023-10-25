const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Triangle = require('./lib/triangle');

const OUTPUT_DIR = "./out";
const OUTPUT_FILENAME = "logo.svg";

function isBrandValid(brandName) {
  if(brandName.length === 0)
    return "Brand name must have at least one character";

  if(brandName.length > 3)
    return "Brand name must be less the three chraracters";

  return true;
}

function isValidColor(colorString) {
  const KeywordColors = [
    "white", "black", "gray", "red", "green", "blue", "yellow", "cyan", "magenta"
  ];

  if(!KeywordColors.includes(colorString.toLowerCase()) && (colorString.startsWith("0x") || isNaN(colorString))) {
    return "Not a valid color";
  }

  return true;
}

function inquireUser() {
  const Questions = [
    {
      message: "Name of your brand",
      type: "input",
      name: "brand",
      validate: isBrandValid
    },
    {
      message: "Text color",
      type: "input",
      name: "textColor",
      validate: isValidColor
    },
    {
      message: "Logo shape",
      type: "list",
      name: "shape",
      choices: [
        "circle", "triangle", "square"
      ]
    },
    {
      message: "Logo color",
      type: "input",
      name: "logoColor",
      validate: isValidColor
    }
  ];

  return inquirer.prompt(Questions);
}

function renderLogo(data) {
  const header =
  "<svg width=\"200\" height=\"250\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">";

  const tri = new Triangle();
  tri.setColor("blue");

  return header + tri.render() + "</svg>";
}

function outputData(fileName, data) {
  if(!fs.existsSync(OUTPUT_DIR))
    fs.mkdirSync(OUTPUT_DIR);

  fs.writeFileSync(path.join(OUTPUT_DIR, fileName), data);
}

function init() {
  inquireUser()
  .then((answers) => {
    const renderedLogo = renderLogo(answers);

    outputData(OUTPUT_FILENAME, renderedLogo);
    console.log("Successfully created logo at " + path.join(OUTPUT_DIR, OUTPUT_FILENAME));
  });
}

init();