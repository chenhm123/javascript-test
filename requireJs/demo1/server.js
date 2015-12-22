 var http = require('http') ;
 var fs = require('fs');
 var server = http.createServer(function(req,res){
	fs.readFile('demo.html', function readData(err, data) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data);
  });
 }) ;
 server.listen(8888) ;
 console.log("http server running on port 8888 ...") ;
