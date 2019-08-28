const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const timer=function() {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      console.log('Thanks for using me, ciao!')
      process.exit();
    }
    if(key === 'b'){
      process.stdout.write('\x07');
    }
    if(key === '1' || key === '2' ||key === '3' ||key === '4' ||key === '5' ||key === '6' ||key === '7' ||key === '8' ||key === '9'){
      console.log(`setting timer for ${key} seconds`);
      setTimeout(() => {
        process.stdout.write('\x07');
      },key * 1000)
    }
  });
  }


timer()