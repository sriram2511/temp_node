const {readFileSync, writeFileSync} = require('fs');
console.log('start')
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first,second)

writeFileSync(
    './content/result_sync.txt',
    `Here is ther result${first} and ${second}`,
    {flag:'a'}
)
console.log('done with thiss task')
console.log('starting new task')