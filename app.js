var state = process.argv;
var express = require('express');
var routerM = require('./web').routerMain;
var app = express();

var server = app.listen(8081, function () {

   var host = (parseInt(state[2])==1)?"localhost":this.address().address;
   var port = this.address().port;
   
   console.log("API listening at http://%s:%s", host, port);
});


routerM.forEach(function (val, index, ar){
    if (val.type=="GET"){
        app.get(val.uri, function (req, res) {
            if(typeof val.logic === 'function'){
                return res.send(val.logic(req));
            }
            res.send(val.data);
         });
    }else if(val.type=="POST"){
        app.post(val.uri, function (req, res) {
            if(typeof val.logic === 'function'){
                return res.send(val.logic(req));
            }
            res.send(val.data);
         });
    }   
});






