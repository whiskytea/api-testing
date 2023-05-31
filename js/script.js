const https = require('https');

function getWord(word){
    const dict = https.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=a71734f4-6843-45b0-aabe-a4bdad55dcf5`, (res) => {
        let body = '';
        res.on('data', (data)=>{
            body += data;
        })
        res.on('end', () =>{
            console.dir('end!');
        })
    })
}

getWord('cat');
