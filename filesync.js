const { readFileSync, writeFileSync } = require('fs');

const test = readFileSync('./content/subfolder/test.txt', 'utf8');
const second = readFileSync('./content/subfolder/second.txt', 'utf8');

console.log(test, second);

writeFileSync (
    './content/subfolder/result-gen.text', 
    `Here is the result: ${test}, ${second}`, {flag: 'a'}
);