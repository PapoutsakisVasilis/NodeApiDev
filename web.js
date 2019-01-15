
exports.routerMain = [
    {
        "type": "GET",
        "uri":"/",
        "logic": false,
        "data":"API READY"
    },{
        "type": "GET",
        "uri":"/test",
        "logic": function(dta){
            var example = {
                "name": "name",
                "age": dta.query.param
            };
            return JSON.stringify(example);
        },
        "data":false
    }
];

