
const questions = [
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
        message: "List your collaborators, if any, with links to their GitHub profiles (separate them with commas).",
        name: "credits"
      },
      {
        type: "input",
        message: "Are there any test anstructions?",
        name: "test"
      },
      {
        type: "list",
        message: "Choose a license for your application (Default will be MIT)",
        choices: ["Apache", "GNU","MIT"],
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
  ];

const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')
const inquirer = require('inquirer');

inquirer.prompt(questions).then(answers => {
        
    const fileName = 'sampleREADME.md';

     
     writeToFile(fileName, answers)
     
})

function writeToFile(fileName, answers) {
 fs.writeFile(fileName, generateMarkdown(answers, null, '\t'), function (err) {
     if (err) {
         throw err
     }

 })
}

function init() {

}

init();
