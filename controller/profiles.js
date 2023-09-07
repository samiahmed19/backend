const data = require("../models/Data.json");

function getUsers(req,res){
    const profiles=data;
    res.send({profiles})
}

module.exports ={getUsers};