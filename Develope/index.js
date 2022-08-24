// modules
const inquirer = require('inquirer');
const fs = require('fs');

//generate readme page

const generateReadme = ({title, description, install, usage, contribution, test, license, github, email}) =>
`# ${title}                 [![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})

## Table of Contents
[-Description](#description)

[-Installation Instructions](#installation-instructions)

[-Usage Instructions](#usage-instructions)

[-Test Instructions](#test-instructions)

[-Contact Information](#contact-info)
## Description
${description}

## Installation Instructions:
${install}

## Usage Instructions:
${usage}

## Contribution Guidlines:
${contribution}

## Test Instructions:
${test}

## Contact Info:
Github page: https://github.com/${github}

Email: ${email}`

//generate question

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter a valid title"
                }
            }
        },
        {
            type: 'input',
            message: 'Project description:',
            name: 'description',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter a valid title"
                }
            }
        },
        {
            type: 'input',
            message: 'Insallation instructions:',
            name: 'install',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter valid instructions"
                }
            }
        },
        {
            type: 'input',
            message: 'Usage instructions:',
            name: 'usage',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter valid instructions"
                }
            }
        },
        {
            type: 'input',
            message: 'Contribution guidlines:',
            name: 'contribution',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter valid guidlies"
                }
            }
        },
        {
            type: 'input',
            message: 'Test instructions:',
            name: 'test',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter valid instructions"
                }
            }
        },
        {
            type: 'list',
            message: 'License:',
            name: 'license',
            choices: ['Apache','Boost','Eclipse','IBM','MIT','N/A'],
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please choose a valid license"
                }
            }
        },
        {
            type: 'input',
            message: 'Please enter your Github username:',
            name: 'github',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter a valid username"
                }
            }
        },
        {
            type: 'input',
            message: 'Please enter you email address',
            name: 'email',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter a valid email"
                }
            }
        },

    ])
    .then((answers) => {
        const readmePageContent = generateReadme(answers);
    // Write file
        fs.writeFile('ReadMe.md', readmePageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created ReadMe!')
        );
      });
    