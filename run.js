const ESC = '\x1B';
const reset = ESC+'[0m';
import chalk from 'chalk';
console.log(chalk.red('Hello world'));

function write(text){
    process.stdout.write(text);
}

for(let i = 0; i<256; i++){
      write(ESC+`[38;5;${i}m`+'#'+reset)
}

// for(let r = 0; r<256; r++){
//     for(let g = 0; g<256; g++){
//         for(let b = 0; b<256; b++){
//             write(ESC+`[48;2;${r};${g};${b}m`+' '+reset)
//         }
//     }
//     write('\n');
// }


for(let r = 0; r<256; r++){
    write(ESC+`[48;2;${r};0;0m`+' '+reset)
}
write('\n');
write(chalk.ansi256(4)('Hello'));
write(chalk.rgb(23,53,67)('Hello'));
write(chalk.hex('#bada55')('Hello'));