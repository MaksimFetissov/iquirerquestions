const ESC = '\x1B';
const reset = ESC+'[0m';
import chalk from 'chalk';

import readline from 'readline';

readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
}


function drawItems(items, active){
    items.forEach((item, index) => {
        if(index === active){
            item = chalk.inverse(item);
        }
        write(item + '\n');
    });
}

function write(text){
    process.stdout.write(text);
}

export default (items, answer) => {
    let active = 0;
    
    drawItems(items, active);
    

let listener = (chunk, key) => {
  
    if(!key){
      return;
    }
    //console.log(key);
    if(key.name == 'c' && key.ctrl == true){
      process.exit();
    }
    if(key.name == 'q'){
      process.exit();
    }
    if(key.name=='down'){
      active++;
      if(active>=items.length){
          active = 0;
      }
    }
  
    if(key.name=='up'){
      active--;
      if(active<0){
          active = items.length-1;
      }
    }
    write(ESC + '[' + items.length + 'A');
    drawItems(items, active);
    if(key.name=='return'){
        answer(items[active]);
        process.stdin.removeListener('keypress', listener);
        if (process.stdin.isTTY) {
            process.stdin.setRawMode(false);
        }    
    }
  }
  process.stdin.on('keypress', listener);
}



    
