const express = require('express');
const accounts = require('./database');
// const app = express();
const route = require('./route');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({extended:false}))
const port = 3000;

app.use('/api', route)
//get req
app.get('/', (req,res)=>{
    res.send("Routing App");
})

//post req
route.post('/accounts', (req,res)=>{
    const incomingAccount =req.body;
    accounts.push(incomingAccount);
    res.json(accounts);
})

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})