const { exec } = require('child_process');

// const cmd = 'ls -la';
// const cmd = 'latex --version';
// const cmd = 'latex prescription-20260808-aaabbbcom-prescription-main.tex';
const cmd = 'make nodeLatex file=prescription-20260808-aaabbbcom-prescription-main';

exec(cmd, (error, stdout, stderr) => {
 if (error) {
  console.error(`Execution error: ${error.message}`);
  return;
 }

 if (stderr) {
  console.error(`Shell stderr: ${stderr}`);
  return;
 }

 console.log(`Command output:\n${stdout}`);
 // console.log(`Done ☑`);
});
