import open from 'open';
import { exec } from 'child_process';

/* Chrome */
open('https://chat.openai.com/');
open('https://www.google.com');
open(`https://github.com/RazzNBlue/${process.env.REPO || ''}`);

/* Open all other Applications */
const myShellScript = exec('sh bash/apps-open.sh /myDir');
myShellScript.stdout.on('data', (data)=>{
    console.log(data); 
});
myShellScript.stderr.on('data', (data)=>{
    console.error(data);
});