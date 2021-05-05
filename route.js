const express = require('express');
const route = express.Router();
var accounts = require('./database.js');
route.get('/accounts', (req,res)=>{
    res.json({userData: accounts} );
})

route.get('/accounts/:id',(req,res)=>{
    const accountid = Number(req.params.id);
    const getAccount = accounts.find((account)=>account.id ===accountid)
    if(!getAccount){
        res.status(500).send("Account not Found");
    }else{
        res.json({userData: [getAccount]})
    }
} )

route.put('/accounts/:id', (req,res)=>{
    const accountid = Number(req.params.id);
    const body = req.body;
    const  account = accounts.find((account)=> account.id ===accountid);
    const index = accounts.indexOf(account);
    if(!account){
        res.status(500).send("Account not found")
    }else{
        const updateAccount = {...account, ...body}
        accounts[index] = updateAccount

        res.send(updateAccount)
    }
})
//delete request

route.delete('/accounts/:id', (req,res)=>{
    const accountid = Number(req.params.id);
    const newaccounts = accounts.filter((account)=>(account.id !=accountid));
    if(!newaccounts){
        res.status(500).send("Account not found")
    }else{
        accounts = newaccounts
        res.send(accounts)
    }
})
module.exports = route