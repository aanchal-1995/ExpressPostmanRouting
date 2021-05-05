const express = require('express');
const route = express.Router();
const accounts = require('./database.js');
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

module.exports = route