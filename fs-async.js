const { readFile, writeFile } = require('fs');

readFile('./content/subfolder/test.txt','utf8', (err, result) => {
    if(err) {
        console.log(err)
        return;
    }
    const first = result
    readFile('./content/subfolder/second.txt', 'utf8', (err, result)=>{
        if(err) {
            console.log(err)
            return;
        }
        const second = result
        writeFile('./content/subfolder/result-async.txt',
        `Here is the ${first} and ${second} result`, 
        (err,result) =>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result)
        })
    })
    console.log(result)
})