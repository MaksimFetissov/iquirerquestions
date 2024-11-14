const ESC = '\x1B';
const reset = ESC + '[0m';
import chalk from 'chalk';

import inquirer from 'inquirer';

inquirer
    .prompt([
        
        {
            type: 'input',
            message: 'Who are you?',
            name: 'name',
        },
        
        {
            type: 'number',
            message: 'How old are you?',
            name: 'age',
        },
        
        {
            type: 'confirm',
            message: 'Are you a human?',
            name: 'confirmhuman',
        },

        {
            type: 'list',
            message: 'Favorite fruit?',
            name: 'fruit',
            choices: ['Apple', 'Cherry', 'Mango', 'Pear'],
        },

        {
            type: 'rawlist',
            message: 'Choose a movie',
            name: 'choosemovie',
            choices: ['Spider-man 2', 'The Silence of the Lambs', 'Trainspotting', 'The Matrix'],
        },
        
        {
            type: 'expand',
            message: 'Do you want to continue?',
            name: 'continue',
            choices: [
                { key: 'y', name: 'yes', value: 'yes' },
                { key: 'n', name: 'no', value: 'no' },
            ],
        },
        
        {
            type: 'checkbox',
            message: 'Whose games do you prefer',
            name: 'games',
            choices: ['Valve', 'Ubisoft', 'EA', 'Blizzard', 'Sony'],
        },
        
        {
            type: 'password',
            message: 'Enter your password:',
            name: 'password',
            mask: '*', 
        },
        
        {
            type: 'editor',
            message: 'Write about yourself:',
            name: 'aboutyou',
        },
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