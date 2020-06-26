// function to generate markdown for README
function generateMarkdown(answers) {
  return `![License](https://img.shields.io/badge/License-${answers.license}-red)
  
#${answers.title}

## Description
${answers.description}





## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [${answers.license} License](#${answers.license}-License)
* [Contributing](#Contributing)


## Installation
${answers.instructions}


## Usage 
${answers.usage}


## Test Instructions

${answers.test}


## ${answers.license} License

This project is licensed under the ${answers.license} license.


## Contributing

${answers.credits}

## Questions

If you have any questions pleae direct them to my email address: ${answers.email} or contact me via GitHub here: 
https://github.com/${answers.githubUserName}
 
`;
}

module.exports = generateMarkdown;
