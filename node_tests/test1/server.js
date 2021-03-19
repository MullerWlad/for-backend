var http = require('http');

var general = function(){
    var serve = http.createServer(function (req, res){
        console.log("url: " + req.url);
    });
    serve.listen('wlad_keizer', 'https://vk.com/');
};

module.exports.general = general;