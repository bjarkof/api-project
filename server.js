var express = require('express')
var utils = require("./utils");
var app = express()

app.get('/:query', function (req, res) {
    var query = req.params.query;
    var date;
    
    if(/[a-z]/.test(query)) { 
        date = new Date(query)
        
    } else if(!isNaN(query)) {
        date = new Date(+query);
    }
    if(date) {
        res.send({
            unix: date.getTime(),
            normal: `${utils.getMonthName(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`,
        });    
    } else {
        res.send({
            unix: null,
            normal: null
        });
    }
    
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})