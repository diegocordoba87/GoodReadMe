// array of questions for user
const questions = [""

];

const genertaeMarkdown = require("utils/generateMarkdown.js")

const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project's title?",
      name: "title"
    },
    {
        type: "input",
        message: "Provide a description of your project",
        name: "description"
      },
      {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "instructions"
      },
      {
        type: "input",
        message: "Provide instructions and examples for use",
        name: "usage"
      },
      {
        type: "input",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
        name: "credits"
      },
      {
        type: "input",
        message: "Are there any test anstructions?",
        name: "test"
      },
      {
        type: "list",
        message: "Choose a license for your application",
        choices: ["None","Apache License 2.0", "GNU General Public License v3.0","MIT License","Eclipse Public License 2.0", "Mozilla Public License 2.0","The Unilicense"],
        name: "license"
      },
      {
        type: "input",
        message: "What is your e-mail address?",
        name: "email"
      },
      {
          type: "input",
          message: "Provide your GitHub profile link",
          name: "githublink"
      }
  ])
  .then(answers => {
    console.log(answers);
    console.log(answers.title);
    console.log(answers.description);
    console.log(answers.license);
  });

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
