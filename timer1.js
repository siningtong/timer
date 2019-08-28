const timer=function(num){
  const args = process.argv.slice(2);
  for(let i=0;i<args.length;i++){
    if(isNaN(Number(args[i])) === false && Number(args[i]) >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      },args[i]*1000)
    }
  }
}

timer()