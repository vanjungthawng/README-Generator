const inquirer = require("inquirer");
const fs = require("fs");

// Generate README file
const genReadMe = ({
  username,
  email,
  title,
  description,
  license,
  installation,
  test,
  usage,
  contribution,
}) => {
  let licenseBadge;
  if (license === "MIT") {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache 2.0") {
    licenseBadge = `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GPL") {
    licenseBadge = `[![License: GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "ISC") {
    licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }
  return `
  # ${title}
  ${licenseBadge}
  
  ## Description
  ${description}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Contact](#contact)
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## License
  This project is licensed under the ${license} license.
  
  ## Contribution
  ${contribution}
  
  ## Test
  ${test}
  
  ## Contact
  Email: ${email}
  
  Github: [Click Here!](https://github.com/${username})
  `;
};

// Questions
inquirer
  .prompt([
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
      message:
        "What does the user need to know about contributing to the repo?",
    },
  ])
  .then((answers) => {
    const readMeFormat = genReadMe(answers);

    fs.writeFile("README.md", readMeFormat, (err) =>
      err
        ? console.log(err)
        : console.log("Successfully created the README file!")
    );
  });
