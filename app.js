const {readFile} = require('fs');
const { resolve } = require('path');

const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data)=>{
            if(err) {
                reject(err)
            }else{
                resolve(data)
            }
            })
    })
}

//getText('./content/subfolder/test.txt')
//.then((result)=> console.log(result))
//.catch((err)=>console.log(err))

//with Async Await...

const start = async ()=>{
    try{
        const first = await getText('./content/subfolder/test.txt')
        const second = await getText('./content/subfolder/second.txt')
        console.log(first, second);
    }catch(error) {
        console.log(error)
    }
}

start();