var express = require('express');
var fs = require("fs");
var app = express();

var cwd = 'html';
app.use(express.static(cwd));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

app.all("/api/:name", function (req, res) {
    fs.readFile(`json/${req.params.name}.json`, function (err, data) {
        res.json(JSON.parse(data));
    });
});

var server = app.listen(80, function () {
    console.log('Server running...');
});