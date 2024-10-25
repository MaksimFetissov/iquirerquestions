const ESC = '\x1B';
const reset = ESC+'[0m';
import chalk from 'chalk';


function write(text){
    process.stdout.write(text);
}

write('Hello world');

setTimeout(()=> {
    write(ESC + '[5D' + 'KMS23');
}, 5000);