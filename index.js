const inquirer = require("inquirer");
const fs = require("fs");

// Questions
inquirer.prompt([
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What's your project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a short description of your project: ",
  },
  {
    type: "list",
    name: "license",
    message: "What flavor is your license?",
    choices: ["MIT", "Apache 2.0", "GPL", "ISC"],
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What does the user need to know about contributing to the repo?",
  },
]);
