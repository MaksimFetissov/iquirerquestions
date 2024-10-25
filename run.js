const ESC = '\x1B';
const reset = ESC+'[0m';
import chalk from 'chalk';


function write(text){
    process.stdout.write(text);
}
let date = new Date();
let time = date.toTimeString().substring(0,8);
write(time);

setInterval(()=> {
    write(ESC + '[8D');
    let date = new Date();
    let time = date.toTimeString().substring(0,8);
    write(time);
}, 1000);