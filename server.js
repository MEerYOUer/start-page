var express = require('express');
var fs = require("fs");
var path = require("path");
var app = express();

app.use(express.static(__dirname + "/public", {
    index: false, 
    immutable: true, 
    cacheControl: true,
    maxAge: "30d"
}));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/public/html/index.html"));
});

app.get("/image", function (req, res) {
    var dir = __dirname + "/public/images/bg";
    var result;

    // grab random background image
    // return image path relative to recieving jQuery script file
    fs.readdir(dir, (err, files) => {
        if (files.length > 0) {
            var relativePath = "../images/bg";
            var random = Math.floor(Math.random() * (files.length));
            var image = files[random];

            console.info("[" + (new Date).toLocaleString() + "] --- " + "RETRIEVED IMAGE: [" + image + "]");
            result = relativePath + "/" + image;
        } 
        else {
            result = undefined;
        }
    });
    
    res.end(result);
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.info("[" + (new Date).toLocaleString() + "] --- " + "start-page is now listening at http://%s:%s", host, port)
});