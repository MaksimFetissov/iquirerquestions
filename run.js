const ESC = '\x1B';
const reset = ESC + '[0m';
import chalk from 'chalk';

import inquirer from 'inquirer';

inquirer
    .prompt([
        {
            type:'list',
            message: 'Favorite fruit?',
            name:'fruit',
            choices: ['Apple', 'Cherry', 'Mango', 'Pear'],
        }
    ])
    .then((answers) => {
        console.log(answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });