import { exec } from 'child_process';

/* Close all Applications */
const myShellScript = exec('sh bash/apps-close.sh /myDir');
myShellScript.stdout.on('data', (data)=>{
    console.log(data); 
});
myShellScript.stderr.on('data', (data)=>{
    console.error(data);
});