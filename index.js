// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateREADME = require('./src/README-template');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your README?',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter a title!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter a description!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter the installation instructions!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage for this project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter usage!')
                return false;
            }
          }
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What license does your project use? (Check all that apply)',
        choices: ['Apache 2.0', 'BSD-3-Clause', 'BSD-2-Clause', 'GPL', 'LGPL', 'MIT', 'Mozilla Public'],
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'Who contributed to this project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter who contributed!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'What are some tests for this project?',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter a test!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your contact email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
      }
    ]);
  };

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await questions();
        const generatePage = generateReadme(answers);

        await fs.writeFile('./dist/README.md', generatePage);
        console.log('README.md has been created!');
    }   catch(err) {
        console.log(err);
    }
  }

// Function call to initialize app
init();
