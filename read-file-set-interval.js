const { readFile } = require('fs')

console.log('Started a first task successfully')

readFile('./content/subfolder/test.txt', 'utf-8', (err, result)=>{
    if(err) {
        console.log(err)
        return;
    }
    console.log(result)
    console.log("Completed Starting the next one")
})

console.log('Starting the next one')

console.log('first')
setTimeout(() => {
    console.log('Second')
}, 0);

console.log('Third one')