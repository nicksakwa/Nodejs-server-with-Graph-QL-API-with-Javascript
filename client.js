const fetch = require('node-fetch');
const API_URL ='http://localhost:4000/';
const runQuery = async()=>{
    const query ='
     query{
        books{
            title
            author
        }
    }';
    
    try{
        const response = await fetch(API_URL, {
            method:'POST'
            headers:{'Content-Type':'application/json'}
            body: JSON.stringify({query})
        });
        const data= await response.json();
        console.log('Query Result:',data.data);
    
    '
}