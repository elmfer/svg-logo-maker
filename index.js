const inquirer = require('inquirer');

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

  if(!KeywordColors.includes(colorString.toLowerCase()) && isNaN(colorString)) {
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
    }
  ];

  return inquirer.prompt(Questions);
}

function init() {
  inquireUser().then((answers) => console.log(answers));
}

init();