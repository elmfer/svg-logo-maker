const inquirer = require('inquirer');

const Questions = [
  {
    message: "Name of your brand",
    type: "input",
    name: "brand"
  }
];

function inquireUser() {
  return inquirer.prompt(Questions);
}

function init() {
  inquireUser().then((answers) => console.log(answers));
}

init();