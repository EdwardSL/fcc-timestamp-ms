var express = require('express');
var fs = require('fs')
var path = require("path");
var strftime = require('strftime')
var app = express();

app.use(require('stylus').middleware('/public/css/style.css'));
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res) {
    res.render("index.html");
//    fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, data) {
//        if(err) return console.log(err);
//        return res.send(data);
//    })
})
app.get('/:time', function(req, res){
    if(/^\d{1,}$/.test(req.params.time)) {
        var time = new Date(req.params.time * 1000);
    } else {
        var time = new Date(req.params.time);
    }
    
    if(time.getTime()) {
        res.json({
            "unix": Math.round(time.getTime()/1000),
            "natural":strftime('%B %d, %Y', time)
        });
    } else {
        res.json({
            "unix": null,
            "natural":null
        });
        
    }
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
	console.log('Node.js listening on port ' + port + '...');
});