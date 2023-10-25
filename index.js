const inquirer = require('inquirer');

function isBrandValid(brandName) {
  if(brandName.length === 0)
    return "Brand name must have at least one character";

  if(brandName.length > 3)
    return "Brand name must be less the three chraracters";

  return true;
}

const Questions = [
  {
    message: "Name of your brand",
    type: "input",
    name: "brand",
    validate: isBrandValid
  }
];

function inquireUser() {
  return inquirer.prompt(Questions);
}

function init() {
  inquireUser().then((answers) => console.log(answers));
}

init();