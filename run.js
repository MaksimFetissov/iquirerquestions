const ESC = '\x1B';
const reset = ESC+'[0m';
import chalk from 'chalk';

import select from './select.js';

select([1, 2, 3, 4, 5, 6], answer => {
    console.log('answer:' + answer);
    process.exit();
});
    
