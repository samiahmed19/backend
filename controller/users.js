const data = require("../models/Data.json");

function getUsers(req,res){
    const user=data;
    res.send({user})
}

module.exports ={getUsers};