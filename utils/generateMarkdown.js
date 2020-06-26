// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

# Description
${answers.description}

![License](https://img.shields.io/badge/License-${answers.license}-red)



## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [${answers.license} License](#${answers.license}-License)
* [Contributing](#Contributing)


## Installation
${answers.installation}


## Usage 
${answers.usage}


## Test Instructions

${answers.test}


## ${answers.license} License


## Contributing

${answers.credits}

## Questions

If you have any questions pleae direct them to my email address: ${answers.email} or contact me via GitHub here: ${answers.githublink}
 
`;
}

module.exports = generateMarkdown;
