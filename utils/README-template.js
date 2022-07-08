// generateReadme function populating the README.md
function generateREADME(answers) {
    return `
# ${answers.title}
  
![badge](https://img.shields.io/badge/license-${answers.license}-blue)

## Description
${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-blue)

This application is covered by the ${answers.license} license. 

## Contributing
${answers.contributions}

## Tests
${answers.test}

## Questions
Have any questions for me? Contact me through GitHub or Email.

GitHub: [${answers.github}](https://github.com/${answers.github})

Email: ${answers.email}

`;
  }
  
module.exports = generateREADME;